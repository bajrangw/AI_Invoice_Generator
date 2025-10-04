export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", 
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/me",
    UPDATE_PROFILE: "/api/auth/me", 
  },

  INVOICE: {
    CREATE: "/api/invoices/",
    GET_ALL_INVOICES: "/api/invoices/",
    GET_INVOICES_BY_ID: (id) => `/api/invoices/${id}`,
    UPDATE_INVOICES: (id) => `/api/invoices/${id}`,
    DELETE_INVOICES: (id) => `/api/invoices/${id}`, 
  },

  AI: {
    PARSE_INVOICES_TEXT: "/api/ai/parse-text",
    GENERATE_REMINDER: "/api/ai/generate-reminder",
    GET_DASHBOARD_SUMMARY: "/api/ai/dashboard-summary",
  }
};
