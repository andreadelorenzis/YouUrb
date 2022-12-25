import { View, Image, Text, StyleSheet } from "react-native";
import ReviewStars from "./ReviewStars";

export default function ProfilePicture({ source, text, avgRating, style, size }) {
    return (
        <View style={[styles.container, style]}>
            <Image
                source={source}
                style={[
                    styles.image,
                    size
                        ? { width: size, height: size, borderRadius: size / 2 }
                        : { width: 36, height: 36, borderRadius: 18 }
                ]}
            />
            <View style={styles.textContainer}>
                {text && <Text style={styles.text}>{text}</Text>}
                {avgRating && <ReviewStars averageRating={avgRating} size={13} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    border: {
        borderWidth: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        marginRight: 5
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textDecorationLine: 'underline'
    }
});