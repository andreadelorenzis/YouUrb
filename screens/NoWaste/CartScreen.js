import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { FoodContext } from "../../store/foods-context";
import { FOODS, CART, simulateFetch } from "../../store/mockdata";

export default function CartScreen() {
    const [isFetching, setIsFetching] = useState(false);

    const foodsCtx = useContext(FoodContext);

    useEffect(() => {
        async function fetchCartItems() {
            setIsFetching(true);
            try {
                const response = await simulateFetch;
                // foodsCtx.loadFoodsInCart(CART);
            } catch (error) {
                console.warn(error);
            }
            setIsFetching(false);
        }
        fetchCartItems();
    }, []);

    if (isFetching) {
        return <LoadingOverlay />
    }

    if (foodsCtx.cartItems.length === 0) {
        return (
            <View style={styles.noFoods}>
                <Text style={styles.noFoodsText}>Nessun cibo nel carrello</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {foodsCtx.cartItems.map((item) => {
                return (
                    <Text key={item.id}>{item.name}</Text>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noFoods: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noFoodsText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})