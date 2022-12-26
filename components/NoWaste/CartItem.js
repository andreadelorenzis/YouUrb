import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { Colors } from "../../constants/Colors";
import Button from "../UI/Button";
import ProfilePicture from "../User/ProfilePicture";
import { Ionicons } from '@expo/vector-icons';
import { formatPrice } from "../../utils/Validation";

export default function CartItem({ food, style, onPress, onRemove }) {
    return (
        <Pressable style={[styles.container, style]}
            onPress={onPress}>
            <Image source={food.imageUri} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{food.name}</Text>
                <Text style={styles.price}>{formatPrice(food.price)}</Text>
                <Text style={{ color: Colors.textSecondary }}>Venduto da:</Text>
                <ProfilePicture
                    source={food.user.imageUri}
                    text={food.user.name}
                    style={{ marginTop: 10 }}
                />
            </View>
            <Pressable
                style={[styles.close, ({ pressed }) => pressed && styles.pressed]}
                onPress={() => onRemove(food.id)}
            >
                <Ionicons
                    name="close"
                    size={30}
                    color="#333333"
                />
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        padding: 20,
        paddingTop: 30,
        width: '100%',
        height: 210,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    leftContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
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
        width: 140,
        height: 160,
        resizeMode: 'contain',
        overflow: 'hidden',
        marginRight: 25,
    },
    textContainer: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#605959'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.green,
        marginBottom: 10
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    pressed: {
        opacity: 0.5
    }
});
