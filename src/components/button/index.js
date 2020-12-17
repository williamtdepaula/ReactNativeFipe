import React from 'react'
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import { DEFAULT_COLOR } from '../../utils/Constants'

export default function ButtonDefault({ onPress, text, loading, disabled }) {
    return (
        <View style={styles.containerButton} >
            <Pressable
                style={[styles.btn, {opacity: disabled ? 0.5 : 1}]}
                onPress={onPress}
                android_ripple={{ borderless: false, radius: 5 }}
                disabled={disabled}
            >
                {loading
                    ? <ActivityIndicator size="small" color='#fff' />
                    : <Text style={styles.text}>{text}</Text>
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    btn: {
        width: '70%',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: DEFAULT_COLOR,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700'
    }
})