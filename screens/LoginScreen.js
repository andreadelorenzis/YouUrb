import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import TextInput from '../components/UI/TextInput';
import ActionButton from '../components/UI/ActionButton';
import { loginUser } from '../utils/Requests';
import { AuthContext } from '../store/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const authCtx = useContext(AuthContext);

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEmail(enteredValue);
                break;
            case 'password':
                setPassword(enteredValue);
                break;
        }
    }

    function switchAuthScreenHandler() {
        navigation.replace('Signup');
    }

    async function submitHandler() {
        // Validate input
        if (!email || !password) {
            Alert.alert(
                'Errore',
                'Inserisci la tua email e la tua password.'
            );
            return;
        }

        setIsLoading(true);
        try {
            const authObj = await loginUser(email, password);
            authCtx.authenticate(authObj.token, authObj.refreshToken);
            AsyncStorage.setItem('start-time', JSON.stringify(Date.now()));
        } catch (error) {
            Alert.alert(
                'Errore',
                'Non è stato possibile effettuare l\'accesso. Riprova più tardi.'
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accedi</Text>
            {
                isLoading
                    ? <Text>Loading...</Text>
                    : <>
                        <View style={styles.form}>
                            <TextInput
                                type='email'
                                placeholder='Inserisci la tua email'
                                label='Email:'
                                value={email}
                                onChangeText={updateInputValueHandler}
                                keyboardType='email-address'
                            />
                            <TextInput
                                type='password'
                                placeholder='Inserisci la tua password'
                                label='Password:'
                                value={password}
                                onChangeText={updateInputValueHandler}
                                secure={true}
                            />
                        </View>
                        <View style={styles.links}>
                            <TouchableOpacity onPress={switchAuthScreenHandler}>
                                <Text style={styles.link}>Non hai ancora effettuato la Registrazione?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.link}>Email o password dimenticata?</Text>
                            </TouchableOpacity>
                        </View>
                        <ActionButton
                            style={styles.button}
                            onPress={submitHandler}
                        >
                            Accedi
                        </ActionButton>
                    </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 32,
        marginBottom: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
    },
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
    button: {
        width: '100%',
        marginTop: 30,
    },
    links: {
        width: '100%'
    },
    link: {
        textDecorationLine: 'underline',
        marginBottom: 10
    },
});

export default LoginScreen;