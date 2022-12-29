import { Text, View, StyleSheet } from "react-native"
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import ProfilePicture from "../../components/User/ProfilePicture";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";

export default function InformationScreen() {
    const user = useContext(AuthContext).user;

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
                <Text style={styles.name}>{user.name} {user.surname}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Ionicons name="mail" size={24} color={Colors.textSecondary} />
                <Text style={styles.email}>{user.email}</Text>
            </View>
            {
                user.cellphone && <View style={styles.infoContainer}>
                    <Ionicons name="phone-portrait" size={24} color={Colors.textSecondary} />
                    <Text style={styles.email}>{user.cellphone}</Text>
                </View>
            }
            {
                <View style={styles.infoContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bio:</Text>
                    {user.bio && <Text style={styles.email}>{user.bio}</Text>}
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
    }
});