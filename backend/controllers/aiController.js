const { GoogleGenAI } = require("@google/genai");
const Invoice = require("../models/Invoice");

// Initialize AI client; reads GEMINI_API_KEY from environment variables
const ai = new GoogleGenAI({});

const parseInvoiceFromText = async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required" });

    try {
        const prompt = `
        You are an expert invoice data extraction assistant.
        Extract the following invoice information in valid JSON:
        {
          "clientName": "string",
          "email": "string (if available)",
          "address": "string (if available)",
          "items": [
            {
              "name": "string",
              "quantity": "number",
              "unitPrice": "number"
            }
          ]
        }

        Invoice text:
        ---TEXT---
        ${text}
        ---TEXT---
        Return only the JSON object.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        const cleanedJson = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsedData = JSON.parse(cleanedJson);

        res.status(200).json(parsedData);

    } catch (error) {
        console.error("Error parsing invoice with AI:", error);
        res.status(500).json({ message: "Failed to parse invoice", details: error.message });
    }
};

const generateReminderEmail = async (req, res) => {
    const { invoiceId } = req.body;
    if (!invoiceId) return res.status(400).json({ message: "Invoice ID is required" });

    try {
        const invoice = await Invoice.findById(invoiceId);
        if (!invoice) return res.status(404).json({ message: "Invoice not found" });

        const prompt = `
        Write a polite reminder email for the following invoice:
        - Client: ${invoice.billTo.clientName}
        - Invoice #: ${invoice.invoiceNumber}
        - Amount Due: ${invoice.total.toFixed(2)}
        - Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}
        Keep it friendly, concise, and start with "Subject:".
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        res.status(200).json({ reminderText: response.text });

    } catch (error) {
        console.error("Error generating reminder email:", error);
        res.status(500).json({ message: "Failed to generate email", details: error.message });
    }
};

const getDashboardSummary = async (req, res) => {
    try {
        const invoices = await Invoice.find({ user: req.user.id });
        if (!invoices.length) return res.status(200).json({ insights: ["No invoice data available."] });

        const totalInvoices = invoices.length;
        const paidInvoices = invoices.filter(inv => inv.status === 'Paid');
        const unpaidInvoices = invoices.filter(inv => inv.status !== 'Paid');
        const totalRevenue = paidInvoices.reduce((acc, inv) => acc + inv.total, 0);
        const totalOutstanding = unpaidInvoices.reduce((acc, inv) => acc + inv.total, 0);

        const summary = `
        Total invoices: ${totalInvoices}
        Paid: ${paidInvoices.length}
        Unpaid: ${unpaidInvoices.length}
        Revenue: ${totalRevenue.toFixed(2)}
        Outstanding: ${totalOutstanding.toFixed(2)}
        Recent invoices: ${invoices.slice(0,5).map(inv => `#${inv.invoiceNumber}: ${inv.total.toFixed(2)} (${inv.status})`).join(', ')}
        `;

        const prompt = `
        You are a financial assistant. Provide 2-3 actionable insights based on this invoice summary.
        Return as JSON with key "insights" (array of short strings):
        ${summary}
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        const cleanedJson = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsedData = JSON.parse(cleanedJson);

        res.status(200).json(parsedData);

    } catch (error) {
        console.error("Error generating dashboard summary:", error);
        res.status(500).json({ message: "Failed to generate insights", details: error.message });
    }
};

module.exports = { parseInvoiceFromText, generateReminderEmail, getDashboardSummary };
