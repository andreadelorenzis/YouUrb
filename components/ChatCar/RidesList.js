import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import RideCard from './RideCard';

export default function RidesList({ rides, listOptions }) {
    const navigation = useNavigation();

    function renderRideItem(itemData) {
        function pressRideHandler() {
            navigation.navigate('RideDetails', {
                rideId: itemData.item.id
            });
        }

        return <RideCard ride={itemData.item} onPress={pressRideHandler} />
    }

    return (
        <View style={styles.ridesContainer}>
            <FlatList
                data={rides}
                keyExtractor={(item) => item.id}
                renderItem={renderRideItem}
                {...listOptions}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ridesContainer: {
        marginBottom: 40
    },
});
