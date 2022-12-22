import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors.js";

export default function ActionButton({ children, onPress, mode, style, iconLeft, iconRight }) {
    return (
        <View style={[styles.buttonContainer, style]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[
                    styles.button,
                    mode === 'transparent' && styles.transparentBtn,
                    mode === 'cancel' && styles.cancelBtn
                ]}>
                    {iconLeft}
                    <Text style={[
                        styles.buttonText,
                        mode === 'transparent' && styles.transparentBtnText,
                        mode === 'cancel' && styles.cancelBtnText
                    ]}>
                        {children}
                    </Text>
                    {iconRight}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 4,
        overflow: 'hidden',
        width: 100
    },
    button: {
        backgroundColor: Colors.red,
        padding: 8,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transparentBtn: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    transparentBtnText: {
        color: "#333333",
        fontWeight: 'bold',
        fontSize: 20
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4,
    },
    cancelBtn: {
        backgroundColor: '#F2F2F2',
        borderColor: '#D7D7D7',
        borderWidth: 1,
    },
    cancelBtnText: {
        color: '#605959'
    }
});