import axios from 'axios';

const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const defaultBaseURL = isLocal ? '/api' : 'https://portfoliobackend-tdt6.onrender.com/api';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || defaultBaseURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const sendContactMessage = (data) => api.post('/contact', data);
export const fetchProjects = () => api.get('/projects');

export default api;
