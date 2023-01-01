import { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import RidesList from "../../components/ChatCar/RidesList";
import { MY_RIDES } from "../../store/mockdata";
import { Colors } from "../../constants/Colors";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import { simulateFetch } from "../../store/mockdata";
import Button from "../../components/UI/Button";
import { Ionicons } from '@expo/vector-icons';
import NoItemsOverlay from "../../components/UI/NoItemsOverlay";
import { useNavigation } from "@react-navigation/native";

export default function MyRidesScreen() {
    const [myRides, setMyRides] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        fetchMyRides();
    }, []);

    async function fetchMyRides() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            setMyRides(MY_RIDES);
        } catch (error) {
            setError(error);
            console.warn(error);
        }
        setIsFetching(false);
    }

    function addRideHandler() {
        navigation.navigate('SellStack', { screen: 'OfferRide' });
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

    if (myRides.length === 0) {
        <NoItemsOverlay message="Nessun passaggio offerto disponibile." />
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    iconRight={<Ionicons name="add" size={24} color="white" />}
                    onPress={addRideHandler}
                >
                    Offri un passaggio
                </Button>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{myRides.length} risultati</Text>
            </View>
            <RidesList rides={myRides} />
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
        backgroundColor: Colors.red,
        width: 200
    }
});
