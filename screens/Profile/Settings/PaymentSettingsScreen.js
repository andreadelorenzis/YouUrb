import { View, Text, StyleSheet } from "react-native";
import ProfileButton from "../../../components/User/ProfileButton";
import { Colors } from "../../../constants/Colors";

export default function PaymentSettings() {
    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Opzioni di pagamento</Text>
                <ProfileButton text="Aggiungi carta" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        backgroundColor: 'white',
        marginVertical: 20
    },
    labelText: {
        color: Colors.textSecondary,
        paddingHorizontal: 20,
        paddingTop: 20
    }
});
