// src/services/api.js
import axios from 'axios'

const API_BASE_URL = 'http://localhost/back-end/request' // Cambia esto por tu URL real

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response)
    return Promise.reject(error.response?.data || {message: 'Error desconocido'})
  }
)

export default api