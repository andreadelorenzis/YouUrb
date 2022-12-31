import { View, Text, StyleSheet } from "react-native";
import ReviewStars from "./ReviewStars";
import ProfilePicture from "./ProfilePicture";

export default function ReviewItem({ review, style }) {

    let profilePicture = <ProfilePicture size={50} />;

    if (review.user.imageUri) {
        profilePicture = <ProfilePicture size={50} source={review.user.imageUri} />
    }

    return (
        <View style={[styles.container, style]}>
            {profilePicture}
            <View style={styles.textContainer}>
                <ReviewStars averageRating={review.rating} size={20} />
                <Text style={styles.name}>{review.user.name}</Text>
                <Text style={styles.text}>{review.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: 15,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 8,
        borderRadius: 10
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        textDecorationLine: 'underline',
        paddingVertical: 5
    },
    text: {
        marginRight: 50,
    }
});