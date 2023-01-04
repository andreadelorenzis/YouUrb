import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import ProfileToggleButton from "../../../components/UI/ProfileToggleButton"
import { Colors } from "../../../constants/Colors";

export default function EmailNotificationsScreen() {
    const [notificationValues, setNotificationValues] = useState({
        all: true,
        news: false,
        marketing: false,
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
                label="Attiva notifiche email"
                value={notificationValues.all}
                onValueChange={toggleNotificationsHandler}
                style={{ marginTop: 30, marginBottom: 15 }}
                type="all"
            />
            <View style={styles.buttonsContainer}>
                <Text style={styles.labelText}>Notizie</Text>
                <ProfileToggleButton
                    label="Aggiornamenti da YouUrb"
                    value={notificationValues.news}
                    onValueChange={toggleNotificationsHandler}
                    type="news"
                />
                <ProfileToggleButton
                    label="Comunicazioni marketing"
                    value={notificationValues.marketing}
                    onValueChange={toggleNotificationsHandler}
                    type="marketing"
                />
            </View>
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
        marginVertical: 15
    },
    labelText: {
        color: Colors.textSecondary,
        paddingHorizontal: 20,
        paddingTop: 20
    }
});
