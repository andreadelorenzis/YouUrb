import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Picker from '../UI/Picker';
import TextInput from '../UI/TextInput';
import ActionButton from '../UI/ActionButton';

function CreditCardForm() {
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Mastercard');

    const paymentMethods = [
        { label: 'Visa', value: 'Visa' },
        { label: 'Mastercard', value: 'Mastercard' },
        { label: 'American Express', value: 'AmericanExpress' },
    ];

    function onInputChangeHandler(type, value) {
        switch (type) {
            case 'creditCardNumber':
                setCreditCardNumber(value);
                break;
            case 'expiry':
                setExpiry(value);
                break;
            case 'cvv':
                setCvv(value);
                break;
            case 'name':
                setName(value);
                break;
            default:
                break;
        }
    };

    function onPickerChangeHandler(value) {
        setPaymentMethod(value);
    }

    const submitHandler = () => {
        console.log('Credit cad submitted!')
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText1}>Dati della carta di credito</Text>
                <Text style={styles.headerText2}>(OPZIONALE)</Text>
            </View>
            <Picker
                label='Scelta circuito'
                items={paymentMethods}
                selectedValue={paymentMethod}
                onValueChange={onPickerChangeHandler}
            />
            <TextInput
                label='Numero carta'
                placeholder="xxxx-xxxx-xxxx-xxxx"
                value={creditCardNumber}
                onChangeText={onInputChangeHandler}
            />
            <View style={styles.smallInputsContainer}>
                <TextInput
                    label='Data scadenza'
                    placeholder="Expiry (MM/YY)"
                    value={expiry}
                    onChangeText={onInputChangeHandler}
                    style={styles.smallInput}
                />
                <TextInput
                    label='CVV'
                    placeholder="CVV"
                    value={cvv}
                    onChangeText={onInputChangeHandler}
                    style={[styles.smallInput, styles.smallInput2]}
                />
            </View>
            <TextInput
                label='Nome titolare'
                placeholder="Name on Card"
                value={name}
                onChangeText={onInputChangeHandler}
            />
            <ActionButton onPress={submitHandler} style={styles.button}>
                Verifica
            </ActionButton>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: '#D7D7D7',
        borderRadius: 4,
        borderWidth: 1,
        width: '100%',
        alignItems: 'stretch'
    },
    header: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerText1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerText2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#605959',
    },
    smallInputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallInput: {
        width: '40%',
    },
    smallInput2: {
        marginLeft: 10
    },
    button: {
        width: 100
    }
});

export default CreditCardForm;