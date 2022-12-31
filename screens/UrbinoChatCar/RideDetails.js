import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Roadmap from '../../components/ChatCar/Roadmap';
import { simulateFetch } from '../../store/mockdata';
import { RIDES } from '../../store/mockdata';
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from '../../components/UI/ErrorOverlay';
import { Colors } from '../../constants/Colors';
import ProfilePicture from '../../components/User/ProfilePicture';
import Button from '../../components/UI/Button';
import { formatDate, formatHour } from '../../utils/Validation';

export default function RideDetails({ route }) {
    const [ride, setRide] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const rideId = route.params.rideId;

    useEffect(() => {
        fetchRide();
    }, []);

    async function fetchRide() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const ride = RIDES.find(ride => ride.id === rideId);
            setRide(ride);
        } catch (error) {
            Alert.alert('Impossibile caricare i dati, perfavore riprova più tardi')
            console.warn(error);
            setError(error);
        }
        setIsFetching(false);
    }

    function buyRideHandler() {

    }

    function errorHandler() {
        setError(null);
        fetchRide();
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    const profileProps = {
        source: ride.user.imageUri,
        text: ride.user.name,
        style: styles.profilePicture
    }

    if (ride.user.avgRating && ride.user.avgRating > 0) {
        profileProps.avgRating = ride.user.avgRating;
    }

    return (
        <View style={styles.container}>
            <View style={styles.roadContainer}>
                <Roadmap departure={ride.departureCity} destination={ride.destinationCity} />
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.labelText}>Partenza il:</Text>
                <Text style={styles.primaryText}>{formatDate(ride.date)}</Text>
            </View>
            <View style={styles.departureContainer}>
                <View>
                    <Text style={[styles.labelText, styles.hourLabel]}>Ore:</Text>
                    <Text style={styles.primaryText}>{formatHour(ride.date)}</Text>
                </View>
                <Text style={[styles.primaryText, styles.departureText]}>{ride.departureLocation}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.labelText}>Prezzo:</Text>
                <Text style={styles.priceText}>{ride.price}</Text>
            </View>
            <ProfilePicture
                {...profileProps}
            />
            {ride.description && <Text style={styles.descriptionText}>{ride.description}</Text>}
            <Button style={styles.button}>Prenota il passaggio</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        padding: 20
    },
    roadContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelText: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginRight: 10
    },
    hourLabel: {
        margin: 0
    },
    primaryText: {
        fontSize: 18,
        color: Colors.textPrimary,
        fontWeight: 'bold'
    },
    departureContainer: {
        flexDirection: 'row',
        borderColor: 'rgba(181, 172, 172, 0.31)',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 20,
        alignItems: 'center',
        marginVertical: 20
    },
    departureText: {
        marginLeft: 30
    },
    priceText: {
        fontSize: 22,
        color: Colors.red,
        fontWeight: 'bold'
    },
    profilePicture: {
        marginVertical: 20
    },
    descriptionText: {
        flex: 1
    },
    button: {
        backgroundColor: Colors.red,
        width: '100%',
        marginTop: 40,
        marginBottom: 20
    }
}); 
