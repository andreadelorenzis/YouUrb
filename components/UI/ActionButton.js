import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors.js";

export default function ActionButton({ children, onPress, mode, style }) {
    return (
        <View style={[styles.buttonContainer, style]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 4,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: Colors.red,
        padding: 8,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    flatText: {
        color: "#333333",
        fontWeight: 'bold',
        fontSize: 20
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4,
    },
});