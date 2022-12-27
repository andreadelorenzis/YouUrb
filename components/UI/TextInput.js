import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native"

export default function CustomTextInput({
    label,
    placeholder,
    type,
    onChangeText,
    value,
    style,
    inputStyle,
    keyboardType,
    secure,
    textInputConfig,
    otherProps
}) {
    let inputStyles = [styles.input, inputStyle];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={style}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={inputStyles}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText.bind(this, type)}
                autoCapitalize='none'
                keyboardType={keyboardType || 'default'}
                secureTextEntry={secure}
                {...textInputConfig}
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
        borderColor: '#D7D7D7',
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    inputMultiline: {
        height: 100,
        textAlignVertical: 'top'
    }
});