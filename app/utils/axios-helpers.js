import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://local.eventmakr.com:3001/',
  timeout: 3000,
  withCredentials: true,
});

export default api;
