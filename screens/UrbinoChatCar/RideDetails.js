import React from 'react'
import { Text, View } from 'react-native';

export default function RideDetails({ route }) {
    const rideId = route.params.rideId;

    return (
        <Text>Ride details ({rideId})</Text>
    )
}
