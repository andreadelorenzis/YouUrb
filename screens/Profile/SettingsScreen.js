import { Text, View, StyleSheet } from "react-native"
import ProfileButton from "../../components/User/ProfileButton"
import { Colors } from "../../constants/Colors";

export default function SettingsScreen() {
    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Profilo e account</Text>
                <ProfileButton
                    text="Dati profilo"
                    onPress={() => { }}
                />
                <ProfileButton
                    text="Credenziali"
                    onPress={() => { }}
                />
                <ProfileButton
                    text="Pagamenti"
                    onPress={() => { }}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Notifiche</Text>
                <ProfileButton
                    text="Notifiche push"
                    onPress={() => { }}
                />
                <ProfileButton
                    text="Notifiche email"
                    onPress={() => { }}
                />
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