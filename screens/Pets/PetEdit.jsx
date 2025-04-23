// screens/EditarMascotaScreen.js
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { mascotaService } from '../../services/pets';

const EditarMascotaScreen = ({ route, navigation }) => {
  const { mascota, onUpdate } = route.params;
  const [form, setForm] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mascota) {
      setForm({
        nombre: mascota.nom_mas,
        especie: mascota.esp_mas,
        color: mascota.col_mas,
        raza: mascota.raz_mas,
        alergias: mascota.ali_mas,
        fecha_nacimiento: new Date(mascota.fec_nac_mas),
        peso: mascota.pes_mas.toString(),
        genero: mascota.gen_mas,
        propietario_id: mascota.id_pro_mas
      });
    }
  }, [mascota]);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setForm({ ...form, fecha_nacimiento: selectedDate });
    }
  };

  const handleSubmit = async () => {
    if (!form?.nombre || !form?.especie || !form?.peso) {
      Alert.alert('Error', 'Nombre, especie y peso son requeridos');
      return;
    }

    try {
      setLoading(true);
      const mascotaData = {
        ...form,
        peso: parseFloat(form.peso),
        fecha_nacimiento: form.fecha_nacimiento.toISOString().split('T')[0]
      };

      await mascotaService.actualizarMascota(mascota.id_mas, mascotaData);
      Alert.alert('Éxito', 'Mascota actualizada', [
        { 
          text: 'OK', 
          onPress: () => {
            onUpdate?.();
            navigation.goBack();
          }
        }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message || 'Error al actualizar');
    } finally {
      setLoading(false);
    }
  };

  if (!form) {
    return (
      <View style={styles.center}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Mascota</Text>
      
      {/* Campos del formulario (similar a CrearMascotaScreen) */}

      <Button
        title={loading ? "Guardando..." : "Guardar Cambios"}
        onPress={handleSubmit}
        disabled={loading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      height: 100,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    label: {
      marginTop: 10,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
    },
  });
export default EditarMascotaScreen;