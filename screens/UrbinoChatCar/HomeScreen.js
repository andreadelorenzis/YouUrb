import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "../../components/UI/Button";
import TextInput from "../../components/UI/TextInput";
import DatePicker from "../../components/UI/DatePicker";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState(new Date());
    const [rideFromUrbino, setRideFromUrbino] = useState(true);

    const navigation = useNavigation();

    function changeTextHandler(enteredValue) {
        setDestination(enteredValue);
    }

    function changeDateHandler(date) {
        setDate(date);
    }

    function button1PressedHandler() {
        setRideFromUrbino(true);
    }

    function button2PressedHandler() {
        setRideFromUrbino(false);
    }

    function submitHandler() {
        // Validate input
        if (rideFromUrbino && destination.trim() === '' ||
            !date) {
            Alert.alert('Inserisci tutti i dati richiesti');
            return;
        } else if (date.getDate() < new Date().getDate()) {
            Alert.alert('La data di partenza non deve essere precedente a quella odierna');
            return;
        }

        if (rideFromUrbino) {
            navigation.navigate('RidesOverview', {
                destination: destination,
                date: date.valueOf()
            });
        } else {
            navigation.navigate('RidesOverview', {
                destination: 'Urbino',
                date: date.valueOf()
            });
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Dove devi andare?</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        mode={rideFromUrbino ? 'primary' : 'cancel'}
                        onPress={button1PressedHandler}
                    >
                        Altra città
                    </Button>
                    <Button
                        style={{
                            marginLeft: 10,
                        }}
                        mode={!rideFromUrbino ? 'primary' : 'cancel'}
                        onPress={button2PressedHandler}
                    >
                        Urbino
                    </Button>
                </View>
            </View>
            {rideFromUrbino && <TextInput
                label="Città di destinazione"
                placeholder="Inserisce dove devi andare"
                onChangeText={changeTextHandler}
                value={destination}
                style={styles.textInput}
            />}
            <DatePicker onChange={changeDateHandler} label="Data di partenza:" />
            <View style={{ flex: 1 }}></View>
            <Button
                style={{ width: '100%' }}
                onPress={submitHandler}
            >
                Trova viaggi
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20
    },
});