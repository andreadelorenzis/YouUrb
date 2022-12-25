import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import ProfilePicture from "../User/ProfilePicture"

export default function FoodCard({ food, style, onPress }) {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
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
        width: 150,
        height: 210,
        marginRight: 20,
        marginBottom: 10
    },
    imageContainer: {
        width: '100%',
        height: 60
    },
    image: {
        width: '100%',
        height: 60,
        resizeMode: 'cover',
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
        marginVertical: 5,
        fontWeight: 'bold'
    },
    userText: {
        fontSize: 14,
        textDecorationLine: 'underline',
        marginLeft: 8
    }
});
