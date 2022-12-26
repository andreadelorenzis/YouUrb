import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/UI/Button";
import Carousel from "../../components/UI/Carousel";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ProfilePicture from "../../components/User/ProfilePicture";
import { Colors } from "../../constants/Colors";
import { FoodContext } from "../../store/foods-context";
import { FOODS, simulateFetch } from "../../store/mockdata";

export default function FoodDetails({ route }) {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const [food, setFood] = useState();
    const [inCart, setInCart] = useState(false);

    const foodId = route.params.foodId;

    const foodCtx = useContext(FoodContext);

    useEffect(() => {
        fetchFood();

        // verify if this food is already added to cart
        const isFoodInCart = foodCtx.cartItems.some(item => item.id === foodId);

        if (isFoodInCart) {
            setInCart(true);
        }
    }, []);

    async function fetchFood() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const food = FOODS.find(
                (foodItem) => foodItem.id === foodId
            )
            setFood(food);
        } catch (error) {
            console.warn(error);
            Alert.alert("Siamo spiacenti, ma non è ottenere i dati. Riprova più tardi.");
            setError("Siamo spiacenti, ma non è ottenere i dati. Riprova più tardi.")
        }
        setIsFetching(false);
    }

    function cartHandler() {
        if (inCart) {
            removeFromCartHandler();
        } else {
            addToCartHandler();
        }
    }

    function addToCartHandler() {
        foodCtx.addFoodToCart(food);
        setInCart(true);
    }

    function removeFromCartHandler() {
        foodCtx.removeFoodFromCart(food.id);
        setInCart(false);
    }

    function errorHandler() {
        setError(null);
        fetchFood();
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    return (
        <ScrollView style={styles.container}>
            <Carousel />
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.description}>{food.description}</Text>
            <ProfilePicture
                style={styles.profile}
                source={food.user.imageUri}
                text={food.user.name}
                avgRating={5.0}
                size={55}
            />
            <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Prezzo: </Text>
                <View>
                    <Text style={styles.price}>{food.price}</Text>
                    <Text>Tutti i prezzi includono l'IVA</Text>
                </View>
            </View>
            <Button
                style={styles.button}
                onPress={cartHandler}
                mode={inCart ? "cancel" : ""}
            >
                {inCart ? "Salvato" : "Aggiungi al carrello"}
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        color: Colors.textPrimary
    },
    description: {
        color: Colors.textSecondary,
        marginVertical: 10
    },
    profile: {
        marginVertical: 10,
        marginBottom: 20
    },
    priceContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    priceLabel: {
        color: Colors.textSecondary,
        marginRight: 5,
        marginTop: 4
    },
    price: {
        color: Colors.green,
        fontWeight: 'bold',
        fontSize: 22,
    },
    button: {
        backgroundColor: Colors.green,
        width: '100%'
    }
})