import React from 'react'
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native'

export default function ButtonDefault({ onPress, text, loading }) {
    return (
        <View style={styles.containerButton} >
            <Pressable
                style={styles.btn}
                onPress={onPress}
                android_ripple={{ borderless: false, radius: 5 }}
                disabled={loading}
            >
                {loading
                    ? <ActivityIndicator size="small" color='#98bbf5' />
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
        backgroundColor: '#6b98e3',
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