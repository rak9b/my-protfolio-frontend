export const API_URL = typeof window === 'undefined' ? 'http://127.0.0.1:5000/api' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api');
