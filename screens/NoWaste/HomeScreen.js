import { StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../../store/mockdata"
import FoodCategories from "../../components/NoWaste/FoodCategories";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    function openCategoryHandler(catId, catName) {
        navigation.navigate('FoodsCategory', {
            catId: catId,
            catName: catName
        });
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Sfoglia per categoria</Text>
            <FoodCategories
                categories={CATEGORIES}
                onPress={openCategoryHandler}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold'
    }
});