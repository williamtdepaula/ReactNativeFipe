import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { DEFAULT_COLOR } from '../../utils/Constants'

export default function ButtonText({ onPress, text }) {
    return (
        <Pressable
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: DEFAULT_COLOR,
        fontWeight: '700',
        marginLeft: 10,
    }
})