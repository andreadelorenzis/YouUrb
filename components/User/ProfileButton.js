import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";

export default function ProfileButton({ iconName, text, onPress, style, customIcon }) {
    return (
        <Pressable
            style={
                ({ pressed }) => [(pressed ? styles.pressed : null), style]
            }
            onPress={onPress}
        >
            <View style={[styles.profileButton]}>
                {
                    !customIcon && iconName && <Ionicons name={iconName} size={24} color={Colors.textSecondary} />
                }
                {customIcon}
                <Text style={styles.text}>{text}</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={"#797979"} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    profileButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D7D7D7',
        padding: 10,
        borderBottomWidth: 1,
        height: 60,
    },
    text: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: '#ddd',
    }
})