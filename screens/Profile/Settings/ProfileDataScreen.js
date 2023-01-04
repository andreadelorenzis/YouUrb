import { useContext, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import TextInput from "../../../components/UI/TextInput"
import ProfileButton from "../../../components/User/ProfileButton"
import ProfilePicture from "../../../components/User/ProfilePicture"
import { AuthContext } from "../../../store/auth-context"

export default function ProfileData() {
    const [description, setDescription] = useState('');

    const user = useContext(AuthContext).user;

    function handleInputChange(type, enteredValue) {
        setDescription(enteredValue);
    }

    return (
        <View>
            <ProfileButton
                style={styles.button}
                customIcon={<ProfilePicture size={50} />}
                text="Cambia foto" />
            <TextInput
                value={description}
                onChangeText={handleInputChange}
                textInputConfig={{
                    multiline: true
                }}
                style={styles.input}
                placeholder="Dicci qualcosa su di te"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 70,
        marginBottom: 0
    },
    input: {
        marginTop: 20
    },
    inputContainer: {
        margin: 20
    }
});