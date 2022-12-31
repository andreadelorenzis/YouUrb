import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors.js";

export default function Button({
    children, onPress, mode, style, size, iconLeft, iconRight
}) {
    return (
        <View style={[
            styles.button,
            styles.buttonContainer,
            style,
            mode === 'transparent' ? styles.transparentBtn : {},
            mode === 'cancel' ? styles.cancelBtn : {}
        ]}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#ccc' }}
                style={[
                    ({ pressed }) => pressed && styles.pressed,
                ]}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
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
        </View >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 4,
        overflow: 'hidden',
        width: 100
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: Colors.red,
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