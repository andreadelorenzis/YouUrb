import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { FoodContext } from "../../store/foods-context";
import { FOODS, CART, simulateFetch } from "../../store/mockdata";
import FoodCard from "../../components/NoWaste/FoodCard"
import FoodsList from "../../components/NoWaste/FoodsList";
import CartItem from "../../components/NoWaste/CartItem";
import { useNavigation } from "@react-navigation/native";
import { formatPrice } from "../../utils/Validation";
import Button from "../../components/UI/Button";
import { Colors } from "../../constants/Colors";
import NoItemsOverlay from "../../components/UI/NoItemsOverlay";

export default function CartScreen() {
    const [isFetching, setIsFetching] = useState(false);

    const foodsCtx = useContext(FoodContext);
    const cartItems = foodsCtx.cartItems;

    const navigation = useNavigation();

    useEffect(() => {
        async function fetchCartItems() {
            setIsFetching(true);
            try {
                const response = await simulateFetch();
                // foodsCtx.loadFoodsInCart(CART);
            } catch (error) {
                console.warn(error);
            }
            setIsFetching(false);
        }
        fetchCartItems();
    }, []);

    function renderFoodItem(itemData) {
        function pressFoodHandler() {
            navigation.navigate('FoodDetails', {
                foodId: itemData.item.id
            });
        }

        return (
            <CartItem
                food={itemData.item}
                onPress={pressFoodHandler}
                onRemove={removeItemFromCartHandler}
            />
        );
    }

    function removeItemFromCartHandler(id) {
        foodsCtx.removeFoodFromCart(id);
    }

    function calculateCartTotal() {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        return formatPrice(total);
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    if (cartItems.length === 0) {
        return <NoItemsOverlay message="Nessun cibo nel carrello." />
    }

    const CartFooter = (
        <>
            <View style={styles.footer}>
                <Text style={styles.totalLabel}>
                    Totale ({cartItems.length}) articol{cartItems.length > 1 ? 'i' : 'o'}:
                </Text>
                <Text style={styles.totalPrice}>{calculateCartTotal()}</Text>
            </View>
            <Button style={styles.button}>Procedi al pagamento</Button>
        </>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
                ListFooterComponent={CartFooter}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    noFoods: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noFoodsText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    footer: {
        marginTop: 30,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.green,
        marginLeft: 10
    },
    button: {
        backgroundColor: Colors.green,
        width: '100%'
    }
})