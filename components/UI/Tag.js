import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tag = ({ text, onClose }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name='close' size={22} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#549F93',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    closeButton: {
        marginLeft: 5,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Tag;
