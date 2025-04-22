// src/services/usuarioService.js
import api from './api'

export const usuarioService = {
  // Crear usuario
  crearUsuario: async (usuarioData) => {
    try {
      const response = await api.post('/users.php?action=create', usuarioData)
      return response
    } catch (error) {
      throw error
    }
  },

  // Obtener usuario por ID
  obtenerUsuario: async (id) => {
    try {
      const response = await api.get(`/users.php?action=read&id=${id}`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Obtener usuarios
  obtenerUsuarios: async () => {
    try {
      const response = await api.get(`/users.php?action=read`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Actualizar usuario
  actualizarUsuario: async (id, usuarioData) => {
    try {
      const response = await api.put(`/users.php?action=update&id=${id}`, usuarioData)
      return response
    } catch (error) {
      throw error
    }
  },

  // Desactivar usuario
  desactivarUsuario: async (id) => {
    try {
      const response = await api.delete(`/users.php?action=delete&id=${id}`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Login
  login: async (email, password) => {
    try {
      const response = await api.post('/users.php?action=login', { email, password })
      return response
    } catch (error) {
      throw error
    }
  }
}