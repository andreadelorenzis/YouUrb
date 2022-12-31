import { StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ProfilePicture from "../../components/User/ProfilePicture"
import ReviewItem from "../../components/User/ReviewItem"

export default function RatingsScreen({ user }) {
    function renderReviewItem(itemData) {
        return <ReviewItem
            review={itemData.item}
            style={{ marginBottom: 20 }}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={user.reviews}
                keyExtractor={(item) => item.id}
                renderItem={renderReviewItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});