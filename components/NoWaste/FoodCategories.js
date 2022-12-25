import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FoodCategories({ categories, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                {categories.map((category) => (
                    <Pressable
                        style={styles.tile}
                        key={category.imageUri}
                        onPress={() => onPress(category.id, category.name)}
                    >
                        <Image source={category.imageUri} style={styles.image} />
                        <Text style={styles.text}>{category.name}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 20
    },
    tile: {
        width: '46%',
        height: 170,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        padding: 5
    },
    tilePressed: {
        opacity: 0.9
    },
    image: {
        width: '45%',
        height: 65,
        resizeMode: 'cover',
        overflow: 'hidden',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});