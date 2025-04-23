import { Text, Button, View, StyleSheet } from "react-native";
import React, { Component } from "react"
import { useNavigation } from '@react-navigation/native';



export default function Inicio() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Inicio</Text>
            <Button 
            title="Volver a Home"
            onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create ({
})