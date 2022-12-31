import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import FoodCard from './FoodCard';
import { useNavigation } from '@react-navigation/native';

export default function FoodsList({ foods, listOptions }) {
    const navigation = useNavigation();

    function renderFoodItem(itemData) {
        function pressFoodHandler() {
            navigation.navigate('FoodDetails', {
                foodId: itemData.item.id
            });
        }

        let expand;

        if ('horizontal' in listOptions) {
            expand = false;
        } else {
            expand = true;
        }

        return (
            <FoodCard
                food={itemData.item}
                onPress={pressFoodHandler}
                expand={expand}
            />
        );
    }

    return (
        <View style={styles.foodsContainer}>
            <FlatList
                data={foods}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
                {...listOptions}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    foodsContainer: {
        paddingVertical: 10,
        flex: 1,
        width: '100%'
    },
});
