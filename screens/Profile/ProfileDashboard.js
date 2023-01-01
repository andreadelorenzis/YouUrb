import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfilePicture from "../../components/User/ProfilePicture";
import { AuthContext } from "../../store/auth-context";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";
import ProfileButton from "../../components/User/ProfileButton";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDashboard() {
    const authCtx = useContext(AuthContext);
    const user = authCtx.user;

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <Pressable
                style={({ pressed }) => (pressed ? styles.pressed : null)}
                onPress={() => navigation.navigate("ProfileDetails")}
            >
                <View style={styles.profileButton}>
                    <ProfilePicture
                        source={user.imageUri
                            ? user.imageUri
                            : require('../../assets/foods/account_black.png')}
                        style={styles.profilePicture}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text>Visualizza il mio profilo</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color={Colors.textSecondary} />
                </View>
            </Pressable>
            <ProfileButton
                iconName="receipt-outline"
                text="I miei ordini"
                onPress={() => navigation.navigate("MyOrders")}
            />
            <ProfileButton
                iconName="cash-outline"
                text="Saldo"
                onPress={() => navigation.navigate("Balance")}
            />
            <ProfileButton
                iconName="pizza-outline"
                text="La mia vetrina"
                onPress={() => navigation.navigate("MyProducts")}
            />
            <ProfileButton
                iconName="car-sport-outline"
                text="I miei passaggi offerti"
                onPress={() => navigation.navigate("MyRides")}
            />
            <ProfileButton
                iconName="bookmark-outline"
                text="Salvati"
                onPress={() => { }}
            />
            <ProfileButton
                iconName="settings-outline"
                text="Impostazioni"
                onPress={() => navigation.navigate('Settings')}
                style={{ marginTop: 20 }}
            />
            <ProfileButton
                iconName="folder-outline"
                text="Note legali"
                onPress={() => { }}
            />
            <ProfileButton
                iconName="help-outline"
                text="Centro assistenza"
                onPress={() => { }}
            />
            <ProfileButton
                iconName="happy-outline"
                text="Invia il tuo feedback"
                onPress={() => { }}
            />
            <ProfileButton
                iconName="exit-outline"
                text="Esci"
                onPress={() => authCtx.logout()}
                style={{ marginTop: 20, marginBottom: 30 }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 20,
        borderBottomColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    textContainer: {
        flex: 1
    },
    name: {
        fontWeight: 'bold'
    },
    profilePicture: {
        width: 50,
        height: 50
    },
    pressed: {
        opacity: 0.7
    },
});