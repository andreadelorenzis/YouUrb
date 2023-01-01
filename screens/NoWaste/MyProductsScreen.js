import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MY_PRODUCTS, simulateFetch } from "../../store/mockdata";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import FoodsList from "../../components/NoWaste/FoodsList";
import { Colors } from "../../constants/Colors";
import Button from "../../components/UI/Button";
import { Ionicons } from '@expo/vector-icons';
import NoItemsOverlay from "../../components/UI/NoItemsOverlay";
import { useNavigation } from "@react-navigation/native";

export default function MyProductsScreen() {
    const [myProducts, setMyProducts] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        fetchMyProducts();
    }, []);

    async function fetchMyProducts() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            setMyProducts(MY_PRODUCTS);
        } catch (error) {
            setError(error);
            console.warn(error);
        }
        setIsFetching(false);
    }

    function addFoodHandler() {
        navigation.navigate('SellStack', { screen: 'SellFood' });
    }

    function errorHandler() {
        setError(null);
        fetchMyProducts();
    }

    if (error && !isFetching) {
        return <ErrorOverlay
            message="Errore. Riprova più tardi."
            onConfirm={errorHandler}
        />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    if (myProducts.length === 0) {
        <NoItemsOverlay message="Nessun cibo in vetrina disponibile." />
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    iconRight={<Ionicons name="add" size={24} color="white" />}
                    onPress={addFoodHandler}
                >
                    Aggiungi un prodotto
                </Button>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{myProducts.length} risultati</Text>
            </View>
            <FoodsList foods={myProducts} listOptions={{
                numColumns: 2
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 20
    },
    text: {
        color: Colors.textSecondary,
        fontSize: 16
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: Colors.green,
        width: 200
    }
});
