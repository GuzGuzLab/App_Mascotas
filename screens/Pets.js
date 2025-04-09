import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

export default function Pets() {
    const pets = [
        {
            id: 1,
            name: "Max",
            type: "Perro",
            breed: "Labrador Retriever",
            age: "3 años",
            image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Luna",
            type: "Gato",
            breed: "Siamés",
            age: "2 años",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Rocky",
            type: "Perro",
            breed: "Bulldog Francés",
            age: "1 año",
            image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Milo",
            type: "Conejo",
            breed: "Holandés Enano",
            age: "6 meses",
            image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            name: "Bella",
            type: "Perro",
            breed: "Golden Retriever",
            age: "5 años",
            image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            name: "Simba",
            type: "Gato",
            breed: "Persa",
            age: "4 años",
            image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
    ];

    const renderPetItem = ({ item }) => (
        <View style={styles.petCard}>
            <Image 
                source={{ uri: item.image }}
                style={styles.petImage}
            />
            <View style={styles.petInfo}>
                <Text style={styles.petName}>{item.name}</Text>
                <Text style={styles.petDetails}>{item.type} - {item.breed}</Text>
                <Text style={styles.petAge}>{item.age}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuestros Pacientes Felices</Text>
            <Text style={styles.subtitle}>Ellos confían en nosotros para su cuidado</Text>
            
            <FlatList
                data={pets}
                renderItem={renderPetItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
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
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    petCard: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    petImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    petInfo: {
        flex: 1,
    },
    petName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    petDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    petAge: {
        fontSize: 14,
        color: '#2196F3',
    },
});