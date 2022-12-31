import { useState } from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/UI/Button";
import DatePicker from "../../components/UI/DatePicker"
import TextInput from "../../components/UI/TextInput"
import ToggleButton from "../../components/UI/ToggleButton";

export default function OfferRideScreen() {
    const [inputValues, setInputValues] = useState({
        destination: '',
        seats: '',
        price: 0,
        description: '',
        date: new Date(),
        smoking: false,
        animals: false
    });

    function dateChangeHandler(enteredDate) {
        setInputValues({
            ...inputValues,
            date: enteredDate
        });
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case "destination":
                setInputValues({
                    ...inputValues,
                    destination: enteredValue
                });
                break;
            case "seats":
                setInputValues({
                    ...inputValues,
                    seats: enteredValue
                });
                break;
            case "price":
                setInputValues({
                    ...inputValues,
                    price: enteredValue
                });
                break;
            case "description":
                setInputValues({
                    ...inputValues,
                    description: enteredValue
                });
                break;
            case "smoking":
                setInputValues({
                    ...inputValues,
                    smoking: enteredValue
                });
            case "animals":
                setInputValues({
                    ...inputValues,
                    animals: enteredValue
                })
        }
    }

    function handleSubmit() {
        // Validate input
        if (inputValues.destination === '') {
            Alert.alert('Inserisci una destinazione');
            return;
        }
        if (inputValues.seats === '') {
            Alert.alert('Inserisci numero di posti');
            return;
        }
        if (inputValues.price === '') {
            Alert.alert('Inserisci il prezzo');
            return;
        }
        if (inputValues.description === '') {
            Alert.alert('Inserisci una descrizione');
            return;
        }

        // validate date
        if (inputValues.date === null) {
            Alert.alert('Inserisci una data');
            return;
        }
        if (inputValues.date < new Date()) {
            Alert.alert('La data di partenza non può essere nel passato');
            return;
        }

        console.log('submit');
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput
                label="Destinazione:"
                placeholder="Inserisci dove stai andando, es: Urbino"
                value="Urbino"
                onChangeText={updateInputValueHandler}
                type="destination"
            />
            <DatePicker
                label="Data di partenza:"
                onChange={dateChangeHandler}
            />
            <TextInput
                label="Numero posti disponibili:"
                placeholder="Inserisci numeri posti"
                keyboardType="decimal-pad"
                onChangeText={updateInputValueHandler}
                type="seats"
            />
            <TextInput
                label="Tariffa passaggio:"
                placeholder="Inserisci il prezzo totale del passaggio"
                keyboardType="decimal-pad"
                onChangeText={updateInputValueHandler}
                type="price"
            />
            <TextInput
                label="Descrizione:"
                placeholder="Inserisci una breve descrizione"
                onChangeText={updateInputValueHandler}
                type="description"
                textInputConfig={{
                    multiline: true
                }}
            />
            <View>
                <ToggleButton
                    value={inputValues.smoking}
                    onValueChange={updateInputValueHandler}
                    type="smoking"
                    label="Fumatori?"
                />
                <ToggleButton
                    value={inputValues.animals}
                    onValueChange={updateInputValueHandler}
                    type="animals"
                    label="Animali?"
                />
            </View>
            <Button
                onPress={handleSubmit}
                style={styles.button}
            >
                Publica il passaggio
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    button: {
        marginVertical: 40,
        width: '100%'
    }
});
