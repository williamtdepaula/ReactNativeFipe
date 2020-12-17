import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import ButtonText from '../button/ButtonText'
import { DEFAULT_COLOR, DEFAULT_STYLES } from '../../utils/Constants'

const SELECT_OPTION = { nome: 'Selecione', codigo: 0 }

export default function PickerOption({ title = '', values, onSelect, enabled, loading, showTryAgainButton, onPressTryAgain, onPressSelectOption }) {

    const [options, setOptions] = useState([])
    const [optionSelected, setOptionSelected] = useState(null)

    useEffect(() => {
        const newOptions = [...values]
        newOptions.unshift(SELECT_OPTION)
        setOptions(newOptions)
    }, [values])

    function onSelectOption(option) {
        setOptionSelected(option)
        if (option != 0 && onSelect) onSelect(option)
        else if(onPressSelectOption) onPressSelectOption()

    }

    const renderItemsPicker = () => {
        return options.map(({ nome, codigo }, i) => <Picker.Item key={i} label={nome} value={codigo} />)
    }

    function pickerIsEnabled(){
        return enabled && values.length > 0
    }

    return (

        <View style={[styles.containerPicker, {opacity: !pickerIsEnabled() ? 0.5 : 1}]} >
            <View style={styles.containerTitle}>
                <Text style={styles.title} >{title}</Text>
                {loading && <ActivityIndicator size="small" color={DEFAULT_COLOR} />}
                {(showTryAgainButton && !loading) && <ButtonText text='Tentar novamente' onPress={onPressTryAgain} />}
            </View>

            <View style={styles.picker}>
                <Picker
                    selectedValue={optionSelected}
                    mode='dropdown'
                    onValueChange={onSelectOption}
                    enabled={pickerIsEnabled()}
                >
                    {renderItemsPicker()}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPicker: {
        width: '100%',
        padding: 20,
    },
    containerTitle: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    picker: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: DEFAULT_COLOR,
    }
})