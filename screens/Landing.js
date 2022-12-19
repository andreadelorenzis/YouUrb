import { Image, Text, View, Button } from "react-native";
import ActionButton from "../components/UI/ActionButton";
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
    const navigation = useNavigation();

    function openSignupHandler() {
        navigation.navigate('Signup')
    }

    function openLoginHandler() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logos/logo3.png')}
                style={styles.logoImage}
            />
            <View style={styles.buttonContainer}>
                <ActionButton
                    style={styles.button}
                    onPress={openSignupHandler}
                >
                    Crea un nuovo account
                </ActionButton>
                <ActionButton
                    mode='flat'
                    onPress={openLoginHandler}
                >
                    Accedi
                </ActionButton>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logoImage: {
        width: 223,
        height: 145
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        width: '100%'
    },
    button: {
        width: '100%',
    }
};
