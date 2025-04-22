// Librarys
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native'

// Imports 
import { mascotaService } from '../services/pets'
import MascotaItem from './Pets/MascotasItem'

// Component 
const MascotasScreen = ({ navigation }) => {
  const [mascotas, setMascotas] = useState([])
  const [loading, setLoading] = useState(true)
  const propietarioId = localStorage.getItem('doc') || null

    // Effects 
    useEffect(() => {
        loadPets()
    }, [])

    // Functions
    const loadPets = async () => {
        try {
            setLoading(true)
            if (propietarioId){
                const data = await mascotaService.obtenerMascotasPorPropietario(propietarioId)
                console.log(data)
                if (data) {
                    setMascotas(data.success)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleDetails = (mascota) => {
        navigation.navigate('VerMascota', { mascota })
    }

    const handleEdit = (mascota) => {
        navigation.navigate('EditarMascota', { mascota, onUpdate: loadPets })
    }

    if (loading && mascotas.length === 0) {
        return (
        <View style={styles.center}>
            <ActivityIndicator size="large" />
        </View>
        )
    }

    return (
        <View style={styles.container}>
        {mascotas.length === 0 ? (
            <View style={styles.center}>
            <Text>No hay mascotas registradas</Text>
            <Button 
                title="Agregar Mascota" 
                onPress={() => navigation.navigate('CrearMascota')} 
            />
            </View>
        ) : (
            <FlatList
            data={mascotas}
            keyExtractor={(item) => item.id_mas.toString()}
            renderItem={({ item }) => (
                <MascotaItem 
                    mascota={item} 
                    onVerDetalle={handleDetails}
                    onEditar={handleEdit}
                />
            )}
            contentContainerStyle={styles.list}
            />
        )}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 20,
  }
})

export default MascotasScreen