// Librarys
import React, { useState } from 'react'
import {  View, ScrollView, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'

// Imports 
import { mascotaService } from '../../services/pets'

// Component 
    const CrearMascotaScreen = ({ navigation }) => {
        // Vars 
    const [form, setForm] = useState({
        nombre: '',
        especie: '',
        color: '',
        raza: '',
        alimento: '',
        fecha_nac: new Date(),
        peso: '',
        genero: 'Macho',
        propietario: localStorage.getItem("doc")
    })
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value })
    }

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false)
        if (selectedDate) {
        setForm({ ...form, fecha_nac: selectedDate })
        }
    }

    const handleSubmit = async () => {
        if (!form.nombre || !form.especie || !form.peso) {
            Alert.alert('Error', 'Nombre, especie y peso son requeridos')
            return
        }

        try {
            setLoading(true)
            const mascotaData = {
                ...form,
                peso: parseFloat(form.peso),
                fecha_nac: form.fecha_nac.toISOString().split('T')[0]
            }
            
            const created = await mascotaService.crearMascota(mascotaData)
            if (created.success) {
            }
            if (created.success) {
                Alert.alert('Éxito', 'Mascota creada correctamente', [
                    { text: 'OK', onPress: () => navigation.goBack() }
                ])
                setTimeout(() => {
                    navigation.replace("MascotasList")
                },2000)
            }
            
        } catch (error) {
            Alert.alert('Error', error.message || 'Error al crear mascota')
        } finally {
            setLoading(false)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Nueva Mascota</Text>

        <Text style={styles.label}>Nombre*</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la mascota"
                value={form.nombre}
                onChangeText={(text) => handleChange('nombre', text)}
            />

            <Text style={styles.label}>Especie*</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej: Perro, Gato, etc."
                value={form.especie}
                onChangeText={(text) => handleChange('especie', text)}
            />

            <Text style={styles.label}>Raza</Text>
            <TextInput
                style={styles.input}
                placeholder="Raza de la mascota"
                value={form.raza}
                onChangeText={(text) => handleChange('raza', text)}
            />

            <Text style={styles.label}>Color</Text>
            <TextInput
                style={styles.input}
                placeholder="Color de la mascota"
                value={form.color}
                onChangeText={(text) => handleChange('color', text)}
            />

            <Text style={styles.label}>Alimento frecuente</Text>
            <TextInput
                style={styles.input}
                placeholder="Alimento"
                value={form.alimento}
                onChangeText={(text) => handleChange('alimento', text)}
            />

            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <TouchableOpacity 
                style={styles.input} 
                onPress={() => setShowDatePicker(true)}
            >
                <Text>{form.fecha_nac.toLocaleDateString()}</Text>
            </TouchableOpacity>
            
            {showDatePicker && (
                <DateTimePicker
                value={form.fecha_nac}
                mode="date"
                display="default"
                onChange={handleDateChange}
                maximumDate={new Date()}
                />
            )}

            <Text style={styles.label}>Peso (kg)*</Text>
            <TextInput
                style={styles.input}
                placeholder="Peso en kilogramos"
                value={form.peso}
                onChangeText={(text) => handleChange('peso', text)}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Género</Text>
            <View style={styles.radioGroup}>
                {['Macho', 'Hembra'].map((genero) => (
                <TouchableOpacity
                    key={genero}
                    style={[
                    styles.radioButton,
                    form.genero === genero && styles.radioButtonSelected
                    ]}
                    onPress={() => handleChange('genero', genero)}
                >
                    <Text>{genero}</Text>
                </TouchableOpacity>
                ))}
            </View>


        <Button
            title={loading ? "Guardando..." : "Guardar Mascota"}
            onPress={handleSubmit}
            disabled={loading}
        />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 40,
      height: 100
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 15,
    },
    label: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
    },
    radioGroup: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    radioButton: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
    },
    radioButtonSelected: {
      backgroundColor: '#e3f2fd',
      borderColor: '#2196f3',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 15,
    },
    mascotaItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    mascotaInfo: {
      flex: 2,
    },
    mascotaNombre: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    mascotaActions: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
});
  

export default CrearMascotaScreen