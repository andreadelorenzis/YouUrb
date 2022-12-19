import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomTextInput from '../../components/UI/TextInput';
import AuthProgressBar from '../../components/UI/AuthProgressBar';

function SignupScreen() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'name':
                setName(enteredValue);
                break;
            case 'surname':
                setName(enteredValue);
                break;
            case 'email':
                setEmail(enteredValue);
                break;
            case 'password':
                setPassword(enteredValue);
                break;
            case 'confirmPassword':
                setConfirmPassword(enteredValue);
                break;
        }
    }

    const handleNextPress = () => {
        // Validate input and go to the next step
    };

    const handleBackPress = () => {
        // Go back to the previous step
    };

    return (
        <View style={styles.container}>
            <AuthProgressBar step="step2" />
            <View style={styles.formContainer}>
                <CustomTextInput
                    label={'Nome:'}
                    type='name'
                    placeholder="Inserisci il tuo nome"
                    onChangeText={updateInputValueHandler}
                />
                <CustomTextInput
                    label={'Cognome:'}
                    type='surname'
                    placeholder="Inserisci il tuo cognome"
                    onChangeText={updateInputValueHandler}
                />
                <CustomTextInput
                    label={'Email:'}
                    type='email'
                    placeholder="Inserisci il tuo email"
                    onChangeText={updateInputValueHandler}
                />
                <CustomTextInput
                    label={'Password:'}
                    type='password'
                    placeholder="Inserisci la tua password"
                    onChangeText={updateInputValueHandler}
                />
                <CustomTextInput
                    label={'Conferma password:'}
                    type='confirmPassword'
                    placeholder="Conferma la tua password"
                    onChangeText={updateInputValueHandler}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Indietro"
                    onPress={handleBackPress}
                    icon={
                        <Ionicons name="ios-arrow-back" size={24} color="#ffffff" />
                    }
                />
                <Button
                    title="Avanti"
                    onPress={handleNextPress}
                    icon={
                        <Ionicons name="ios-arrow-forward" size={24} color="#ffffff" />
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    formContainer: {
        width: '100%',
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
});

export default SignupScreen;