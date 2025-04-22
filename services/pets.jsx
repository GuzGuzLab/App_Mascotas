// src/services/mascotaService.js
import api from './api'

export const mascotaService = {
  // Crear mascota
  crearMascota: async (mascotaData) => {
    try {
      const response = await api.post('/pets.php?action=create', mascotaData)
      return response
    } catch (error) {
      throw error
    }
  },

  // Obtener mascota por ID
  obtenerMascota: async (id) => {
    try {
      const response = await api.get(`/pets.php?action=read&id=${id}`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Obtener mascotas
  obtenerMascotas: async () => {
    try {
      const response = await api.get(`/pets.php?action=read`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Obtener mascotas por propietario
  obtenerMascotasPorPropietario: async (propietarioId) => {
    try {
      const response = await api.get(`/pets.php?action=byOwner&id=${propietarioId}`)
      return response
    } catch (error) {
      throw error
    }
  },

  // Actualizar mascota
  actualizarMascota: async (id, mascotaData) => {
    try {
      const response = await api.put(`/pets.php?action=update&id=${id}`, mascotaData)
      return response
    } catch (error) {
      throw error
    }
  },

  // Desactivar mascota
  desactivarMascota: async (id) => {
    try {
      const response = await api.delete(`/pets.php?action=delete&id=${id}`)
      return response
    } catch (error) {
      throw error
    }
  }
}