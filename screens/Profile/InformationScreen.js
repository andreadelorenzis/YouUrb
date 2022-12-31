import { Text, View, StyleSheet } from "react-native"
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import ProfilePicture from "../../components/User/ProfilePicture";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";
import Button from "../../components/UI/Button";

export default function InformationScreen({ user, isMyProfile }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ProfilePicture
                    source={user.imageUri
                        ? user.imageUri
                        : require('../../assets/foods/account_black.png')}
                    size={150}
                    style={styles.profilePicture}
                />
                <Text style={styles.name}>{user.username}</Text>
                <Button
                    iconRight={<Ionicons name="chatbox-ellipses-outline" size={24} color="#ccc" />}
                    style={styles.button}
                >
                    Messaggio
                </Button>
            </View>
            {
                user.email && <View style={styles.infoContainer}>
                    <Ionicons name="mail" size={24} color={Colors.textSecondary} />
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            }
            {
                <View style={styles.infoContainer}>
                    {user.bio && <Text style={styles.email}>{user.bio}</Text>}
                    {user.residence && <Text>{user.description}</Text>}
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 40
    },
    profilePicture: {
        marginBottom: 20,
        opacity: 0.5
    },
    header: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22
    },
    email: {
        marginLeft: 10,
    },
    infoContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#5A5F80',
        width: 200,
        marginTop: 20
    }
});