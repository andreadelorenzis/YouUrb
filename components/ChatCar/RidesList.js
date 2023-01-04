import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import RideCard from './RideCard';

export default function RidesList({ rides, listOptions, style }) {
    const navigation = useNavigation();

    function renderRideItem(itemData) {
        function pressRideHandler() {
            navigation.navigate('RideDetails', {
                rideId: itemData.item.id
            });
        }

        let expand;

        if (listOptions && 'horizontal' in listOptions) {
            expand = false;
        } else {
            expand = true;
        }

        return <RideCard
            ride={itemData.item}
            onPress={pressRideHandler}
            expand={expand}
        />
    }

    return (
        <View style={[styles.ridesContainer, style]}>
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
        paddingVertical: 10,
        width: '100%'
    },
});
