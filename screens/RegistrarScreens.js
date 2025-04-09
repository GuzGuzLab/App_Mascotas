// Librarys 
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from "react-native";

// Imports 
import { PostData } from './Varios/util'

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isFocused, setIsFocused] = useState({
        email: false,
        password: false,
        confirmPassword: false
    });

    const handleRegister = () => {
        // Validaciones de los campos
        if (!email || !password || !confirmPassword) {
            alert("Por favor, completa todos los campos");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Validación simple de email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Ingresa un correo electrónico válido");
            return;
        }

        sendData({email: email,password: password})
    };

    // Function send data to database 
    const sendData = async (data) => {
        // Vars 
        const url = "http://localhost/back-end/services/users.php"

        try {
            await PostData(url,data)
            alert("Registro exitoso");
            navigation.navigate("Home")
        } catch (err){
            console.log(err)
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Crear Cuenta</Text>
            <Text style={styles.subtitle}>Completa tus datos</Text>
            
            {/* Input de correo electrónico */}
            <TextInput
                style={[styles.input, isFocused.email && styles.inputFocused]}
                placeholder="Correo electrónico"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setIsFocused({...isFocused, email: true})}
                onBlur={() => setIsFocused({...isFocused, email: false})}
            />
            
            {/* Input de contraseña */}
            <TextInput
                style={[styles.input, isFocused.password && styles.inputFocused]}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onFocus={() => setIsFocused({...isFocused, password: true})}
                onBlur={() => setIsFocused({...isFocused, password: false})}
            />
            
            {/* Input de confirmar contraseña */}
            <TextInput
                style={[styles.input, isFocused.confirmPassword && styles.inputFocused]}
                placeholder="Repetir contraseña"
                placeholderTextColor="#999"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                onFocus={() => setIsFocused({...isFocused, confirmPassword: true})}
                onBlur={() => setIsFocused({...isFocused, confirmPassword: false})}
            />
            
            {/* Botón de Registro */}
            <TouchableOpacity 
                style={styles.registerButton}
                onPress={handleRegister}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            
            {/* Enlace para navegar al login */}
            <TouchableOpacity 
                onPress={() => navigation.navigate("Login")}
                activeOpacity={0.6}
            >
                <Text style={styles.link}>
                    ¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        padding: 35,
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
        marginBottom: 15,
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
    registerButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#2ecc71', // Verde para diferenciar del login
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
        shadowColor: '#2ecc71',
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
});
