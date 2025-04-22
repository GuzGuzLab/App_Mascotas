// components/MascotaItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { mascotaService } from '../../services/pets';

const MascotaItem = ({ mascota, onVerDetalle, onEditar }) => {
  const handleEliminar = async () => {
    Alert.alert(
      'Eliminar Mascota',
      `¿Estás seguro de eliminar a ${mascota.nom_mas}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await mascotaService.desactivarMascota(mascota.id_mas);
              Alert.alert('Éxito', 'Mascota eliminada');
              // if (onVerDetalle) {
              //   onVerDetalle();
              // }
            } catch (error) {
              Alert.alert('Error', 'No se pudo eliminar la mascota');
            }
          }
        }
      ]
    );
  };

  const calcularEdad = (fechaNacimiento) => {
    // Implementa lógica para calcular edad
    return "3 años"; // Ejemplo
  }

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onVerDetalle(mascota)}
    >
      <View style={styles.info}>
        <Text style={styles.nombre}>{mascota.nom_mas}</Text>
        <Text>{mascota.esp_mas} - {mascota.raz_mas}</Text>
        <Text>Edad: {calcularEdad(mascota.fec_nac_mas)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => onEditar(mascota)}
        >
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={handleEliminar}
        >
          <Text style={styles.actionText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    height: 100,
  },
  info: {
    flex: 2,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#2196F3',
    borderRadius: 4,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
  }
});

export default MascotaItem;