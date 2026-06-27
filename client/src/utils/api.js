import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const sendContactMessage = (data) => api.post('/contact', data);
export const fetchProjects = () => api.get('/projects');

export default api;
