import { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { AuthContext } from '../store/auth-context';

import TextInput from '../components/UI/TextInput';
import AuthProgressBar from '../components/UI/AuthProgressBar';
import CreditCardForm from '../components/Billing/CreditCardForm';
import ActionButton from '../components/UI/ActionButton';
import { validateCellphone, validateEmail } from '../utils/Validation';
import { ScrollView } from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { createUser } from '../utils/Requests';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignupScreen() {
    const [accountInfo, setAccountInfo] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [personalInfo, setPersonalInfo] = useState({
        address: '',
        fiscalCode: '',
        faculty: '',
        cellphone: '',
        termsOfUse: false,
        privacyPolicy: false,
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);

    const navigation = useNavigation();

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'name':
                setAccountInfo({
                    ...accountInfo,
                    name: enteredValue,
                });
                break;
            case 'surname':
                setAccountInfo({
                    ...accountInfo,
                    surname: enteredValue,
                });
                break;
            case 'email':
                setAccountInfo({
                    ...accountInfo,
                    email: enteredValue,
                });
                break;
            case 'password':
                setAccountInfo({
                    ...accountInfo,
                    password: enteredValue,
                });
                break;
            case 'confirmPassword':
                setAccountInfo({
                    ...accountInfo,
                    confirmPassword: enteredValue,
                });
                break;
            case 'address':
                setPersonalInfo({
                    ...personalInfo,
                    address: enteredValue,
                });
                break;
            case 'fiscalCode':
                setPersonalInfo({
                    ...personalInfo,
                    fiscalCode: enteredValue,
                });
                break;
            case 'faculty':
                setPersonalInfo({
                    ...personalInfo,
                    faculty: enteredValue,
                });
                break;
            case 'cellphone':
                setPersonalInfo({
                    ...personalInfo,
                    cellphone: enteredValue,
                });
                break;
            case 'termsOfUse':
                setPersonalInfo({
                    ...personalInfo,
                    termsOfUse: enteredValue,
                });
                break;
            case 'privacyPolicy':
                setPersonalInfo({
                    ...personalInfo,
                    privacyPolicy: enteredValue,
                });
                break;
        }
    }

    function nextPressHandler() {
        // Validate input
        if (currentStep === 1) {
            if (
                accountInfo.name === '' ||
                accountInfo.surname === '' ||
                accountInfo.email === '' ||
                accountInfo.password === '' ||
                accountInfo.confirmPassword === ''
            ) {
                alert('Tutti i campi sono obbligatori');
                return;
            } else if (!validateEmail(accountInfo.email)) {
                alert('Email non valida');
                return;
            } else if (accountInfo.password !== accountInfo.confirmPassword) {
                alert('Le password non coincidono');
                return;
            }
        } else if (currentStep === 2) {
            if (
                personalInfo.address === '' ||
                personalInfo.fiscalCode === '' ||
                personalInfo.faculty === '' ||
                personalInfo.cellphone === ''
            ) {
                alert('Tutti i campi sono obbligatori');
                return;
            } else if (!validateCellphone(personalInfo.cellphone)) {
                alert('Numero di cellulare non valido');
                return;
            } else if (!personalInfo.termsOfUse || !personalInfo.privacyPolicy) {
                alert('Accetta i termini di utilizzo e la privacy policy');
                return;
            }
        }

        // Go to next step of registration process
        if (currentStep !== 3) {
            setCurrentStep(curStep => {
                return curStep + 1;
            });
        } else {

            navigation.replace('Home');
        }
    };

    function backPressHandler() {
        if (currentStep !== 1) {
            setCurrentStep(curStep => {
                return curStep - 1;
            });
        } else {
            signupHandler();
        }
    };

    async function signupHandler() {
        console.log('Name: ' + accountInfo.name);
        console.log('Surname: ' + accountInfo.surname);
        console.log('Email: ' + accountInfo.email);
        console.log('Password: ' + accountInfo.password);
        console.log('Address: ' + personalInfo.address);
        console.log('Fiscal Code: ' + personalInfo.fiscalCode);
        console.log('Faculty: ' + personalInfo.faculty);
        console.log('Cellphone: ' + personalInfo.cellphone);
        console.log('Terms of Use: ' + personalInfo.termsOfUse);
        console.log('Privacy Policy: ' + personalInfo.privacyPolicy);
        // navigation.navigate('Landing');

        try {
            setIsLoading(true);
            const authObj = await createUser(accountInfo.email, accountInfo.password);
            console.log(authObj);
            authCtx.authenticate(authObj.token, authObj.refreshToken);
            AsyncStorage.setItem('start-time', JSON.stringify(Date.now()));
        } catch (error) {
            Alert.alert(
                'Errore',
                'Si è verificato un errore durante la registrazione. Riprova più tardi.',
            );
        } finally {
            setIsLoading(false);
        };
    }

    let content;

    switch (currentStep) {
        case 1:
            content = (
                <>
                    <TextInput
                        label={'Nome:'}
                        type='name'
                        placeholder="Inserisci il tuo nome"
                        onChangeText={updateInputValueHandler}
                        value={accountInfo.name}
                    />
                    <TextInput
                        label={'Cognome:'}
                        type='surname'
                        placeholder="Inserisci il tuo cognome"
                        onChangeText={updateInputValueHandler}
                        value={accountInfo.surname}
                    />
                    <TextInput
                        label={'Email:'}
                        type='email'
                        placeholder="Inserisci il tuo email"
                        onChangeText={updateInputValueHandler}
                        value={accountInfo.email}
                        keyboardType='email-address'
                        isInvalid={() => { console.log('invalid') }}
                    />
                    <TextInput
                        label={'Password:'}
                        type='password'
                        placeholder="Inserisci la tua password"
                        onChangeText={updateInputValueHandler}
                        value={accountInfo.password}
                    />
                    <TextInput
                        label={'Conferma password:'}
                        type='confirmPassword'
                        placeholder="Conferma la tua password"
                        onChangeText={updateInputValueHandler}
                        value={accountInfo.confirmPassword}
                    />
                </>
            );
            break;
        case 2:
            content = (
                <>
                    <TextInput
                        label={'Indirizzo:'}
                        type='address'
                        placeholder="Inserisci il tuo indirizzo"
                        onChangeText={updateInputValueHandler}
                        value={personalInfo.address}
                    />
                    <TextInput
                        label={'Codice fiscale:'}
                        type='fiscalCode'
                        placeholder="Inserisci il tuo codice fiscale"
                        onChangeText={updateInputValueHandler}
                        value={personalInfo.fiscalCode}
                    />
                    <TextInput
                        label={'Facoltà:'}
                        type='faculty'
                        placeholder="Inserisci la tua facoltà"
                        onChangeText={updateInputValueHandler}
                        value={personalInfo.faculty}
                    />
                    <TextInput
                        label={'Cellulare:'}
                        type='cellphone'
                        placeholder="Inserisci il tuo cellulare"
                        onChangeText={updateInputValueHandler}
                        value={personalInfo.cellphone}
                    />
                    <View style={styles.chechboxContainer}>
                        <Checkbox
                            value={personalInfo.termsOfUse}
                            style={styles.chechbox}
                            onValueChange={updateInputValueHandler.bind(this, 'termsOfUse')}
                        />
                        <Text>
                            Accetto i <Text style={{ textDecorationLine: 'underline' }}>termini e condizioni</Text> del servizio
                        </Text>
                    </View>
                    <View style={styles.chechboxContainer}>
                        <Checkbox
                            value={personalInfo.privacyPolicy}
                            style={styles.chechbox}
                            onValueChange={updateInputValueHandler.bind(this, 'privacyPolicy')}
                        />
                        <Text>
                            Dichiaro di aver letto l'informativa per il <Text style={{ textDecorationLine: 'underline' }}>trattamento dei miei dati personali</Text> del servizio
                        </Text>
                    </View>
                </>
            );
            break;
        case 3:
            content = (
                <>
                    <CreditCardForm />
                </>
            );
            break;
    }

    const demoContent = (
        <>
            <TextInput
                label={'Email:'}
                type='email'
                placeholder="Inserisci il tuo email"
                onChangeText={updateInputValueHandler}
                value={accountInfo.email}
                keyboardType='email-address'
                isInvalid={() => { console.log('invalid') }}
            />
            <TextInput
                label={'Password:'}
                type='password'
                placeholder="Inserisci la tua password"
                onChangeText={updateInputValueHandler}
                value={accountInfo.password}
            />
        </>
    );

    return (
        <View style={styles.container}>
            <AuthProgressBar step={currentStep} />
            <KeyboardAvoidingView style={styles.formContainer}>
                <ScrollView>
                    {isLoading ? <Text>Loading...</Text> : demoContent}
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.buttonContainer}>
                <ActionButton
                    mode='cancel'
                    onPress={backPressHandler}
                    iconLeft={<Ionicons name="ios-arrow-back" size={24} color="#605959" />}
                >
                    Indietro
                </ActionButton>
                <ActionButton
                    onPress={signupHandler}
                    iconRight={<Ionicons name="ios-arrow-forward" size={24} color="#ffffff" />}
                >
                    Avanti
                </ActionButton>
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
        flex: 1
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
    chechboxContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20
    },
    chechbox: {
        marginRight: 10,
        backgroundColor: '#F2F2F2',
        borderColor: '#D7D7D7',
        borderRadius: 5
    }
});

export default SignupScreen;