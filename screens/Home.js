import { Text, Button, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const menuItems = [
        { title: "Servicios", screen: "Services", icon: "🩺", color: "#4CAF50" },
        { title: "Nuestros Pacientes", screen: "MascotasList", icon: "🐶", color: "#FF9800" },
        { title: "Sobre Nosotros", screen: "About", icon: "🏥", color: "#2196F3" },
        { title: "Contacto", screen: "Contact", icon: "📞", color: "#9C27B0" },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/color/96/000000/dog-heart.png' }} 
                    style={styles.logo}
                />
                <Text style={styles.title}>Veterinaria Amigos</Text>
                <Text style={styles.subtitle}>Cuidando a tus mascotas con amor</Text>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={[styles.menuButton, { backgroundColor: item.color }]}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <Text style={styles.menuIcon}>{item.icon}</Text>
                        <Text style={styles.menuText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.promoBanner}>
                <Text style={styles.promoText}>¡Primera consulta gratis este mes!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        height: 100,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menuButton: {
        width: '48%',
        height: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    menuIcon: {
        fontSize: 40,
        marginBottom: 10,
    },
    menuText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    promoBanner: {
        backgroundColor: '#FF5722',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    promoText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});