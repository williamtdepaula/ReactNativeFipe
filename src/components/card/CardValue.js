import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function CardValue() {
    const { loading, error, vehicle } = useSelector(state => state.vehicle)

    const { brand, model, year } = useSelector(state => state.filter)

    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        setShowCard(false)
    }, [brand, model, year])

    useEffect(() => {
        if (!loading && !error && vehicle) setShowCard(true)
    }, [loading, error, vehicle])

    return (
        showCard
            ?
            <View style={styles.containerCard}>
                <Text style={styles.title} >{`Preço do ${vehicle.Marca} ${vehicle.Modelo} ${vehicle.AnoModelo}`}</Text>
                <Text style={styles.value}>{vehicle.Valor}</Text>
            </View>
            :
            <></>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: '90%',
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center',
        padding: 40,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 20,
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: '#13c24b',
    }
})