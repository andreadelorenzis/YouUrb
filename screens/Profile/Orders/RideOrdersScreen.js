import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../../components/User/OrderItem";

export default function RidesOrderedScreen({ rides }) {
    function renderRideOrder(itemData) {
        return (
            <OrderItem item={itemData.item} type="ride" />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={rides}
                keyExtractor={(item) => item.id}
                renderItem={renderRideOrder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
});