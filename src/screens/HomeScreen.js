import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native'
import PickerBrand from '../components/picker/PickerBrand'
import PickerModel from '../components/picker/PickerModel'
import PickerYear from '../components/picker/PickerYear'
import { DEFAULT_STYLES } from '../utils/Constants'
import ButtonDefault from '../components/button'
import CardValue from '../components/card/CardValue'

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getBrandsExternal } from '../store/actions/Brand'
import { getVehicle } from '../store/actions/Vehicle'

export default function HomeScreen({ }) {
    const dispatch = useDispatch()

    const { brand, model, year } = useSelector(state => state.filter)
    const { loading } = useSelector(state => state.vehicle)

    useEffect(() => {
        dispatch(getBrandsExternal())
    }, [])

    function onPressToGetPrice() {
        dispatch(getVehicle())
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={DEFAULT_STYLES.containerView}>
                <Image style={styles.image} source={require('../../assets/imgs/fipe.png')} ></Image>

                <Text style={styles.title} >Encontre o valor médio de referência de carros</Text>

                <PickerBrand testID='picker-brand' />

                <PickerModel />

                <PickerYear />

                <ButtonDefault
                    text='Consultar preço'
                    onPress={onPressToGetPrice}
                    loading={loading}
                    disabled={!brand || !model || !year}
                />

                <CardValue />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '30%',
        height: '10%',
        resizeMode:"contain",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 30,
        textAlign:"center",
    }
})