import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { formatDate } from "../../utils/Validation";

export default function OrderItem({ item, type }) {
    return (
        <View style={styles.itemContainer}>
            <View>
                <Image
                    source={type === 'food'
                        ? item.imageUri
                        : require('../../assets/foods/placeholder.png')}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.name}>{type === 'food' ? item.name : item.destinationCity}</Text>
                <Text style={styles.text}>Ordine completato!</Text>
                <Text style={[styles.text, styles.date]}>{formatDate(item.date)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20,
        resizeMode: 'contain'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        color: Colors.textSecondary,
        fontSize: 16,
        marginVertical: 5
    },
    date: {
        marginTop: 0
    }
});