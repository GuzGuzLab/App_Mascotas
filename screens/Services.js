import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Services() {
    const navigation = useNavigation();

    
    const services = [
        {
            id: 1,
            name: "Consulta General",
            description: "Examen físico completo y diagnóstico inicial para tu mascota.",
            price: "$500",
            image: "https://img.icons8.com/color/48/000000/stethoscope.png"
        },
        {
            id: 2,
            name: "Vacunación",
            description: "Aplicación de vacunas según el calendario correspondiente.",
            price: "$400",
            image: "https://img.icons8.com/color/48/000000/medical-doctor.png"
        },
        {
            id: 3,
            name: "Cirugías",
            description: "Procedimientos quirúrgicos con equipo especializado.",
            price: "Desde $2000",
            image: "https://img.icons8.com/color/48/000000/surgery.png"
        },
        {
            id: 4,
            name: "Estética",
            description: "Baño, corte de pelo, corte de uñas y limpieza de oídos.",
            price: "$300",
            image: "https://img.icons8.com/color/48/000000/haircut.png"
        },
        {
            id: 5,
            name: "Laboratorio",
            description: "Análisis clínicos y estudios de laboratorio.",
            price: "Desde $600",
            image: "https://img.icons8.com/color/48/000000/microscope.png"
        },
        {
            id: 6,
            name: "Emergencias 24/7",
            description: "Atención inmediata para casos de urgencia.",
            price: "$800",
            image: "https://img.icons8.com/color/48/000000/emergency-call.png"
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Nuestros Servicios</Text>
            
            {services.map(service => (
                <TouchableOpacity 
                    key={service.id}
                    style={styles.serviceCard}
                    onPress={() => navigation.navigate('Contact')}
                >
                    <Image 
                        source={{ uri: service.image }} 
                        style={styles.serviceImage}
                    />
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>{service.name}</Text>
                        <Text style={styles.serviceDescription}>{service.description}</Text>
                        <Text style={styles.servicePrice}>{service.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    serviceCard: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    serviceImage: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    serviceInfo: {
        flex: 1,
    },
    serviceName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    serviceDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
});