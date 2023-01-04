import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native"
import ProfileButton from "../../../components/User/ProfileButton"
import { Colors } from "../../../constants/Colors";

export default function SettingsScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Profilo e account</Text>
                <ProfileButton
                    text="Dati profilo"
                    onPress={() => { navigation.navigate('ProfileData') }}
                />
                <ProfileButton
                    text="Impostazioni account"
                    onPress={() => { navigation.navigate('AccountSettings') }}
                />
                <ProfileButton
                    text="Pagamenti"
                    onPress={() => { navigation.navigate('PaymentSettings') }}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Notifiche</Text>
                <ProfileButton
                    text="Notifiche push"
                    onPress={() => { navigation.navigate('PushNotificationsSettings') }}
                />
                <ProfileButton
                    text="Notifiche email"
                    onPress={() => { navigation.navigate('EmailNotificationsSettings') }}
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