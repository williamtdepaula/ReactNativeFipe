import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function PickerOption({ title = '', values, listenerToResetPicker = null, onSelect, enabled, loading }) {

    const [options, setOptions] = useState([])
    const [optionSelected, setOptionSelected] = useState(null)

    useEffect(() => {
        const newOptions = [...values]
        newOptions.unshift({ nome: 'Selecione', codigo: 0 })
        setOptions(newOptions)
    }, [values])

    useEffect(() => {
        if (listenerToResetPicker) setOptions(['Selecione'])
    }, [listenerToResetPicker])

    function onSelectOption(option) {
        setOptionSelected(option)
        if (option != 0 && onSelect) onSelect(option)

    }

    const renderItemsPicker = () => {
        return options.map(({ nome, codigo }, i) => <Picker.Item key={i} label={nome} value={codigo} />)
    }

    return (

        <View style={styles.containerPicker} >
            <View style={styles.containerTitle}>
                <Text style={styles.title} >{title}</Text>
                {loading && <ActivityIndicator size="small" color='#98bbf5' />}
            </View>

            <View style={styles.picker}>
                <Picker
                    selectedValue={optionSelected}
                    mode='dropdown'
                    onValueChange={onSelectOption}
                    enabled={enabled}
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    picker: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#98bbf5',
    }
})