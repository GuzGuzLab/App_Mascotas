import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function About() {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }}
                style={styles.bannerImage}
            />
            
            <Text style={styles.title}>Sobre Nosotros</Text>
            
            <Text style={styles.paragraph}>
                En Veterinaria Amigos, nos dedicamos a proporcionar la mejor atención médica para tus mascotas desde 2010. 
                Nuestro equipo de profesionales altamente capacitados está comprometido con el bienestar animal.
            </Text>
            
            <Text style={styles.subtitle}>Nuestra Misión</Text>
            <Text style={styles.paragraph}>
                Proporcionar atención veterinaria de alta calidad con compasión y dedicación, 
                promoviendo la salud y el bienestar de los animales de compañía.
            </Text>
            
            <Text style={styles.subtitle}>Nuestro Equipo</Text>
            
            <View style={styles.teamContainer}>
                <View style={styles.teamMember}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/color/96/000000/doctor-male.png' }}
                        style={styles.teamImage}
                    />
                    <Text style={styles.teamName}>Dr. Juan Pérez</Text>
                    <Text style={styles.teamRole}>Veterinario Principal</Text>
                </View>
                
                <View style={styles.teamMember}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/color/96/000000/doctor-female.png' }}
                        style={styles.teamImage}
                    />
                    <Text style={styles.teamName}>Dra. María Gómez</Text>
                    <Text style={styles.teamRole}>Cirujana Veterinaria</Text>
                </View>
            </View>
            
            <Text style={styles.subtitle}>Nuestras Instalaciones</Text>
            <Text style={styles.paragraph}>
                Contamos con equipos de última generación para diagnóstico y tratamiento, 
                quirófano equipado y áreas de recuperación cómodas para tus mascotas.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        color: '#4CAF50',
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
        marginBottom: 15,
    },
    teamContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    teamMember: {
        alignItems: 'center',
        width: '48%',
    },
    teamImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    teamName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    teamRole: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});