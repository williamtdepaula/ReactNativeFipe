import React, { useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import PickerBrand from '../components/picker/PickerBrand'
import PickerModel from '../components/picker/PickerModel'
import PickerYear from '../components/picker/PickerYear'
import { DEFAULT_STYLES } from '../utils/Constants'
import ButtonDefault from '../components/button'

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getBrandsExternal } from '../store/actions/Brand'
import { getVehicle } from '../store/actions/Vehicle'

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch()

    const vehicleState = useSelector(state => state.vehicle)

    useEffect(() => {
        dispatch(getBrandsExternal())
    }, [])

    useEffect(() => {
        const { loading, error, vehicle } = vehicleState
        console.tron.log('aaa', loading, error, vehicle)
        if (!loading && !error && vehicle) navigation.push('Value')

    }, [vehicleState])

    function onPressToGetPrice() {
        dispatch(getVehicle())
    }

    return (
        <SafeAreaView>

            <View style={DEFAULT_STYLES.containerView} >
                <PickerBrand />

                <PickerModel />

                <PickerYear />

                <ButtonDefault
                    text='Consultar preço'
                    onPress={onPressToGetPrice}
                    loading={vehicleState.loading}
                />
            </View>
        </SafeAreaView>
    )
}