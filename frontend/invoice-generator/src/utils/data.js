import { BarChart2, Mail, Sparkles, FileText, LayoutDashboard, Plus, Users } from "lucide-react";

export const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Invoice Creation",
    description:
      "Paste any text, email, or receipt, and let our AI instantly generate a complete, professional invoice for you.",
  },
  {
    icon: BarChart2,
    title: "AI-Powered Dashboard",
    description:
      "Get smart, actionable insights about your business finances, generated automatically by our AI analyst.",
  },
  {
    icon: Mail,
    title: "Smart Reminders",
    description:
      "Automatically generate polite and effective payment reminder emails for overdue invoices with a single click.",
  },
  {
    icon: FileText,
    title: "Easy Invoice Management",
    description:
      "Easily manage all your invoices, track payments, and send reminders for overdue payments.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "This app saved me hours of work. I can now create and send invoices in minutes!",
    author: "Jane Doe",
    title: "Freelance Designer",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=JD",
  },
  {
    quote: "Managing my client payments has never been this easy. The smart reminders alone are worth it!",
    author: "Mark Thompson",
    title: "Freelance Developer",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=MT",
  },
  {
    quote: "The AI-powered dashboard gave me insights I didn't even know I needed. It's like having a personal finance assistant.",
    author: "Sophia Lee",
    title: "Small Business Owner",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=SL",
  },
  {
    quote: "I used to dread invoicing, but now it's done in just a few clicks. My clients love the professional look!",
    author: "Daniel Carter",
    title: "Consultant",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=DC",
  },
   {
    quote:
      "As an agency owner, keeping track of multiple clients was overwhelming. This app made it seamless and stress-free.",
    author: "Emily Johnson",
    title: "Marketing Agency Owner",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=EJ",
  },
  {
    quote:
      "Finally, an invoicing tool that feels built for entrepreneurs. Fast, simple, and professional every time.",
    author: "Alex Rivera",
    title: "Startup Founder",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=AR",
  },
];

export const FAQS = [
  {
    question: "How does the AI invoice creation work?",
    answer: "Simply paste any text, email, or receipt, and our AI will instantly generate a professional invoice for you.",
  },
  {
    question: "Can I customize the invoice template?",
    answer: "Yes, you can customize colors, branding, and layout to match your business identity.",
  },
  {
    question: "Do I need technical skills to use this app?",
    answer: "Not at all. The app is designed to be simple and intuitive for freelancers, entrepreneurs, and small businesses.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption to keep all your invoices and client data safe.",
  },
  {
    question: "Can I send reminders automatically?",
    answer: "Yes, you can set up smart reminders that automatically send polite follow-up emails for overdue invoices.",
  },
  {
    question: "Does the dashboard support multiple currencies?",
    answer: "Yes, our AI-powered dashboard supports multiple currencies and automatically converts values for accurate insights.",
  },
];

// Navigation items configuration
export const NAVIGATON_MENU = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "invoices", name: "Invoices", icon: FileText },
  { id: "invoices/new", name: "Create Invoice", icon: Plus },
  { id: "profile", name: "Profile", icon: Users },
];



