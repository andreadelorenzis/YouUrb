import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import ProfilePicture from "../User/ProfilePicture"

export default function FoodCard({ food, expand, style, onPress }) {
    return (
        <Pressable style={[
            styles.container, style, expand && styles.expanded
        ]}
            onPress={onPress}>
            <Image source={food.imageUri} style={styles.image} />
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.price}>{food.price}</Text>
            <ProfilePicture
                source={food.user.imageUri}
                text={food.user.name}
                style={{ marginTop: 10 }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        padding: 20,
        width: 160,
        height: 220,
        marginRight: 20,
        marginBottom: 10
    },
    expanded: {
        flex: 1,
        marginRight: 5,
        maxWidth: '48%',
        marginLeft: 5
    },
    imageContainer: {
        width: '100%',
        height: 60
    },
    image: {
        width: '100%',
        height: 85,
        resizeMode: 'contain',
        overflow: 'hidden'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#605959'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
