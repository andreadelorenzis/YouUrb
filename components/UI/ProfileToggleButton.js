import { View, Text, StyleSheet } from "react-native";
import ToggleButton from "./ToggleButton";

export default function ProfileToggleButton({ label, value, onValueChange, type, style }) {

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{label}</Text>
            <ToggleButton
                value={value}
                onValueChange={onValueChange}
                type={type}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    text: {
        flex: 1
    }
});