import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from "../../../components/UI/TextInput";
import { AuthContext } from "../../../store/auth-context";

export default function AccountSettings() {
    const [inputValues, setInputValues] = useState({
        email: '',
        cellphone: '',
    });

    const user = useContext(AuthContext).user;

    useEffect(() => {
        setInputValues({
            ...inputValues,
            email: user.email,
            cellphone: user.cellphone
        })
    }, []);

    function changeInputValuesHandler(type, enteredValue) {
        switch (type) {
            case 'email':
                setInputValues(prevState => {
                    return {
                        ...prevState,
                        email: enteredValue
                    }
                })
                break;
            case 'cellphone':
                setInputValues(prevState => {
                    return {
                        ...prevState,
                        cellphone: enteredValue
                    }
                })
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                label="Email:"
                value={inputValues.email}
                onChangeText={changeInputValuesHandler}
                type="email"
                placeholder="Email"
            />
            <TextInput
                label="Cellulare:"
                value={inputValues.cellphone}
                onChangeText={changeInputValuesHandler}
                type="cellphone"
                placeholder="Cellulare"
                keyboardType="decimal-pad"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40
    },
});
