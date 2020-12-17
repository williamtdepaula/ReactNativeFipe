import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { DEFAULT_STYLES } from '../utils/Constants'

export default function ValueScreen() {
    const { vehicle } = useSelector(state => state.vehicle)

    return (
        <SafeAreaView>
            <View style={DEFAULT_STYLES.containerView}>
                <View style={styles.containerCard}>
                    <Text>{`Preço do ${vehicle.Marca} ${vehicle.Modelo} ${vehicle.AnoModelo}`}</Text>
                    <Text>{vehicle.Valor}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: '90%',
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center',
        padding: 50,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})