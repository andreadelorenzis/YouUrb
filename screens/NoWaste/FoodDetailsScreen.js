import { Text } from "react-native";

export default function FoodDetails({ route }) {
    const foodId = route.params.foodId;

    return (
        <Text>Food details ({foodId})</Text>
    )
}
