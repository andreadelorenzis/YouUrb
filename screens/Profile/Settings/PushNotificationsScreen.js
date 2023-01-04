import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import ProfileToggleButton from "../../../components/UI/ProfileToggleButton"
import { Colors } from "../../../constants/Colors";

export default function PushNotificationsScreen() {
    const [notificationValues, setNotificationValues] = useState({
        all: true,
        messages: true,
        reviews: true,
        discounts: true
    });

    function toggleNotificationsHandler(type, value) {
        console.log(type, value);
        setNotificationValues(prevState => ({
            ...prevState,
            [type]: value
        }));
    }

    return (
        <View>
            <ProfileToggleButton
                label="Attiva notifiche push"
                value={notificationValues.all}
                onValueChange={toggleNotificationsHandler}
                style={{ marginTop: 30, marginBottom: 15 }}
                type="all"
            />
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Notifiche ad alta priorità</Text>
                <ProfileToggleButton
                    label="Nuovi messaggi"
                    value={notificationValues.messages}
                    onValueChange={toggleNotificationsHandler}
                    type="messages"
                />
                <ProfileToggleButton
                    label="Nuova recensione"
                    value={notificationValues.reviews}
                    onValueChange={toggleNotificationsHandler}
                    type="reviews"
                />
                <ProfileToggleButton
                    label="Nuovi sconti"
                    value={notificationValues.discounts}
                    onValueChange={toggleNotificationsHandler}
                    type="discounts"
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
