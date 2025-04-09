import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por contactarnos. Te responderemos pronto.');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Contacto</Text>
            
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Información de contacto</Text>
                <Text style={styles.infoText}>📞 Teléfono: (55) 1234-5678</Text>
                <Text style={styles.infoText}>📧 Email: contacto@veterinariaamigos.com</Text>
                <Text style={styles.infoText}>🏠 Dirección: Av. Principal #123, Col. Centro</Text>
                <Text style={styles.infoText}>🕒 Horario: Lunes a Viernes 9am - 7pm</Text>
            </View>

            <Text style={styles.formTitle}>Envíanos un mensaje</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Mensaje"
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
            />
            
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    infoContainer: {
        backgroundColor: '#e3f2fd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1976d2',
    },
    infoText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});