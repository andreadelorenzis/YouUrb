import { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import RidesList from "../../components/ChatCar/RidesList";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { RIDES, simulateFetch } from "../../store/mockdata";
import { Colors } from "../../constants/Colors";
import DatePicker from "../../components/UI/DatePicker";
import TextInput from "../../components/UI/TextInput";

export default function RidesOverviewScreen({ route }) {
    const [availableRides, setAvailableRides] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const { destination, date } = route.params;

    useEffect(() => {
        fetchRides();
    }, []);

    async function fetchRides() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const fetchedRides = RIDES.filter((ride) => {
                return ride.destinationCity === destination &&
                    ride.date.valueOf() >= date;
            });
            setAvailableRides(fetchedRides);
        } catch (error) {
            setError(error);
            console.warn(error);
        }
        setIsFetching(false);
    }

    function errorHandler() {
        setError(null);
        fetchRides();
    }

    if (error && !isFetching) {
        return <ErrorOverlay
            message="Qualcosa è andato storto. Riprova più tardi."
            onConfirm={errorHandler}
        />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    if (availableRides.length === 0) {
        return (
            <View style={styles.noRides}>
                <Text style={styles.noRidesText}>Nessun passaggio trovato per questa destinazione e data.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.resultsText}>{availableRides.length} risultati</Text>
            </View>
            <RidesList
                rides={availableRides}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    noRides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    noRidesText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginVertical: 10
    },
    resultsText: {
        color: Colors.textSecondary,
        fontSize: 16
    },
});
