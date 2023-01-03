import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../../components/User/OrderItem";

export default function FoodsOrderedScreen({ foods }) {
    function renderFoodOrder(itemData) {
        return (
            <OrderItem item={itemData.item} type="food" />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodOrder}
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