import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ReviewStars({ averageRating, size }) {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Ionicons
            key={`full-star-${i}`}
            name="star"
            size={size}
            color="gold"
        />);
    }

    if (hasHalfStar) {
        stars.push(<Ionicons
            key={`half-star`}
            name="star-half"
            size={size}
            color="gold"
        />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Ionicons
            key={`empty-star-${i}`}
            name="star-outline"
            size={size}
            color="gold"
        />);
    }

    return (
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>{averageRating}/5</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: '#333',
        marginLeft: 8,
    },
});
