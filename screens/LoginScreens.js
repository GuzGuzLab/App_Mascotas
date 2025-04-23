// Librarys 
import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native"

// Imports
import { usuarioService } from '../services/users'

// Component
export default function LoginScreen({ navigation }) {
    // Vars 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isFocused, setIsFocused] = useState({ email: false, password: false })

    // Functions 
    // manejo de inicio de sesion 
    const handleLogin = async () => {
        try {
            if (email && password) {
                const login = await usuarioService.login(email,password)
                if (login.success) {
                    navigation.replace("Home")
                }
            } else {
                alert("Por favor, completa todos los campos")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>
            
            {/* Inputs con efectos de focus */}
            <TextInput
                style={[
                    styles.input, 
                    isFocused.email && styles.inputFocused
                ]}
                placeholder="Correo electrónico"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                onFocus={() => setIsFocused({...isFocused, email: true})}
                onBlur={() => setIsFocused({...isFocused, email: false})}
            />
            
            <TextInput
                style={[
                    styles.input, 
                    isFocused.password && styles.inputFocused
                ]}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onFocus={() => setIsFocused({...isFocused, password: true})}
                onBlur={() => setIsFocused({...isFocused, password: false})}
            />
            
            {/* Botón personalizado */}
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={handleLogin}
                    activeOpacity={0.6}>
                <Text style={styles.link}> ¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text>
                </Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 35,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#dfe6e9',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#2d3436',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    inputFocused: {
        borderColor: '#3498db',
        shadowColor: '#3498db',
        shadowOpacity: 0.2,
        elevation: 3,
    },
    loginButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#3498db',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    link: {
        textAlign: 'center',
        color: '#7f8c8d',
        fontSize: 14,
    },
    linkBold: {
        fontWeight: '600',
        color: '#3498db',
    },
})