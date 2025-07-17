import axios from 'axios';

const api = axios.create({
  baseURL: 'https://intervyou.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');  // ✅ must exist
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
