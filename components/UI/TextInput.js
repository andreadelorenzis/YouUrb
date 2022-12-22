import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native"

export default function CustomTextInput({
    label,
    placeholder,
    type,
    onChangeText,
    value,
    style,
    keyboardType,
    secure,
    otherProps
}) {

    return (
        <View style={style}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText.bind(this, type)}
                autoCapitalize='none'
                keyboardType={keyboardType}
                secureTextEntry={secure}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        marginBottom: 10
    },
    input: {
        height: 40,
        backgroundColor: '#F2F2F2',
        borderColor: '#D7D7D7',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
});