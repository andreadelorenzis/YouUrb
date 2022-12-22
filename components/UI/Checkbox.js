import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

export default function CustomCheckbox({ checked, text, onValueChange }) {
    return (
        <View>
            <Checkbox
                value={checked}
                onValueChange={onValueChange}
            />
            <Text>{text}</Text>
        </View>
    )
}
