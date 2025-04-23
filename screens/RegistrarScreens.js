// src/screens/RegistroUsuarioScreen.js
import React, { useState } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  ScrollView, 
  StyleSheet, 
  Alert,
  TouchableOpacity,
  Platform
} from 'react-native'
// import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { usuarioService } from '../services/users'

const RegistroUsuarioScreen = ({ navigation }) => {
  // Estado para el formulario
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: new Date(),
    tipo_documento: 'DNI',
    documento: '',
    direccion: '',
    celular: '',
    celular2: '',
    email: '',
    contrasena: '',
    confirmar_contrasena: '',
    genero: 'Masculino'
  })

  // Estados auxiliares
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [loading, setLoading] = useState(false)

  // Tipos de documento y géneros disponibles
  const tiposDocumento = ['DNI', 'Cédula', 'Pasaporte', 'Otro']
  const generos = ['Masculino', 'Femenino', 'Otro']

  // Manejar cambio de fecha
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios')
    if (selectedDate) {
      setForm({...form, fecha_nacimiento: selectedDate})
    }
  }

  // Validar formulario
  const validateForm = () => {
    if (!form.nombre.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu nombre')
      return false
    }
    if (!form.apellido.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu apellido')
      return false
    }
    if (!form.documento.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu documento')
      return false
    }
    if (!form.email.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu email')
      return false
    }
    if (!form.contrasena) {
      Alert.alert('Error', 'Por favor ingresa una contraseña')
      return false
    }
    if (form.contrasena !== form.confirmar_contrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden')
      return false
    }
    return true
  }

  // Manejar registro
  const handleRegister = async () => {
    if (!validateForm()) return

    setLoading(true)
    
    try {
      // Preparar datos para enviar al backend
        const usuarioData = {
            nombre: form.nombre,
            apellido: form.apellido,
            fecha_nacimiento: form.fecha_nacimiento.toISOString().split('T')[0],
            tipo_documento: form.tipo_documento,
            documento: form.documento,
            direccion: form.direccion,
            celular: form.celular,
            celular2: form.celular2 || null,
            email: form.email,
            contrasena: form.contrasena,
            genero: form.genero
        }

        const response = await usuarioService.crearUsuario(usuarioData)

        if (response.success){
            Alert.alert(
                'Registro exitoso', 
                'Tu cuenta ha sido creada correctamente',
                [
                { text: 'OK', onPress: () => navigation.navigate('Login') }
                ]
            )
        } else Alert.alert('Error', response.message || 'Ocurrió un error al registrar')
    } catch (error) {
        Alert.alert('Error', error.message || 'Ocurrió un error al registrar')
    } finally {
        setLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      
      {/* Nombre */}
      <Text style={styles.label}>Nombre*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={form.nombre}
        onChangeText={text => setForm({...form, nombre: text})}
      />

      {/* Apellido */}
      <Text style={styles.label}>Apellido*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu apellido"
        value={form.apellido}
        onChangeText={text => setForm({...form, apellido: text})}
      />

      {/* Fecha de Nacimiento */}
      <Text style={styles.label}>Fecha de Nacimiento*</Text>
      <TouchableOpacity 
        style={styles.input} 
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{form.fecha_nacimiento.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {/* <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={(date) => {
          setShowDatePicker(false)
          setForm({ ...form, fecha_nacimiento: date })
        }}
        onCancel={() => setShowDatePicker(false)}
        maximumDate={new Date()}
      /> */}


      {/* Tipo de Documento */}
      <Text style={styles.label}>Tipo de Documento*</Text>
      <View style={styles.radioGroup}>
        {tiposDocumento.map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={[
              styles.radioButton,
              form.tipo_documento === tipo && styles.radioButtonSelected
            ]}
            onPress={() => setForm({...form, tipo_documento: tipo})}
          >
            <Text>{tipo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Número de Documento */}
      <Text style={styles.label}>Número de Documento*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu documento"
        value={form.documento}
        onChangeText={text => setForm({...form, documento: text})}
        keyboardType="numeric"
      />

      {/* Dirección */}
      <Text style={styles.label}>Dirección*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu dirección"
        value={form.direccion}
        onChangeText={text => setForm({...form, direccion: text})}
      />

      {/* Teléfono Principal */}
      <Text style={styles.label}>Teléfono Principal*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu teléfono"
        value={form.celular}
        onChangeText={text => setForm({...form, celular: text})}
        keyboardType="phone-pad"
      />

      {/* Teléfono Secundario */}
      <Text style={styles.label}>Teléfono Secundario (Opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa otro teléfono"
        value={form.celular2}
        onChangeText={text => setForm({...form, celular2: text})}
        keyboardType="phone-pad"
      />

      {/* Email */}
      <Text style={styles.label}>Email*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu email"
        value={form.email}
        onChangeText={text => setForm({...form, email: text})}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Género */}
      <Text style={styles.label}>Género*</Text>
      <View style={styles.radioGroup}>
        {generos.map((genero) => (
          <TouchableOpacity
            key={genero}
            style={[
              styles.radioButton,
              form.genero === genero && styles.radioButtonSelected
            ]}
            onPress={() => setForm({...form, genero: genero})}
          >
            <Text>{genero}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contraseña */}
      <Text style={styles.label}>Contraseña*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        value={form.contrasena}
        onChangeText={text => setForm({...form, contrasena: text})}
        secureTextEntry
      />

      {/* Confirmar Contraseña */}
      <Text style={styles.label}>Confirmar Contraseña*</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        value={form.confirmar_contrasena}
        onChangeText={text => setForm({...form, confirmar_contrasena: text})}
        secureTextEntry
      />

      {/* Botón de Registro */}
      <Button
        title={loading ? "Registrando..." : "Registrarse"}
        onPress={handleRegister}
        disabled={loading}
      />

      <TouchableOpacity 
        style={styles.loginLink} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 25,
      height: 100,
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: '#1a365d',
      marginBottom: 30,
      textAlign: 'center',
      fontFamily: 'System',
    },
    label: {
      fontSize: 14,
      color: '#2c5282',
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#bee3f8',
      borderRadius: 8,
      padding: 15,
      marginBottom: 20,
      backgroundColor: '#fff',
      fontSize: 15,
      color: '#2d3748',
      shadowColor: '#3182ce',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    radioGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
      gap: 10,
    },
    radioButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#bee3f8',
      borderRadius: 20,
      backgroundColor: '#ebf8ff',
    },
    radioButtonSelected: {
      backgroundColor: '#3182ce',
      borderColor: '#3182ce',
    },
    loginLink: {
      marginTop: 25,
      marginBottom: 15,
      alignItems: 'center',
    },
    loginText: {
      color: '#3182ce',
      fontSize: 14,
      fontWeight: '500',
      padding: 20,
    },
})
export default RegistroUsuarioScreen