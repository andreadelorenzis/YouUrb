import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"
import { FOODS, CATEGORIES } from "../../store/mockdata";

import FoodsList from "../../components/NoWaste/FoodsList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../constants/Colors";
import SearchBar from "../../components/UI/SearchBar";
import { simulateFetch } from "../../store/mockdata";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import Tag from "../../components/UI/Tag";

export default function CategoryFoodsScreen({ route, navigation }) {
    const [searchText, setSearchText] = useState('');
    const [availableMeals, setAvailableMeals] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const [isFetching, setIsFetching] = useState(true);

    const categoryId = route.params.catId;

    useEffect(() => {
        fetchCategoryFoods();
    }, []);

    async function fetchCategoryFoods() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const availableCategoryMeals = FOODS.filter((mealItem) => {
                return mealItem.categoryIds.indexOf(categoryId) >= 0;
            });
            setAvailableMeals(availableCategoryMeals);
        } catch (error) {
            console.warn(error);
            Alert.alert("Siamo spiacenti, ma non è ottenere i dati. Riprova più tardi.");
        }
        setIsFetching(false);
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === categoryId
        ).name;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation]);

    function changeTextHandler(enteredValue) {
        setSearchText(enteredValue);
    }

    async function submitSearchHandler() {
        if (searchText.trim() === '') {
            return;
        }

        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const filteredFoods = FOODS.filter((food) =>
                food.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setAvailableMeals(filteredFoods);
            setSearchFilter(searchText);
            setSearchText('');
        } catch (error) {
            console.warn(error);
            Alert.alert("Siamo spiacenti, ma non è ottenere i dati. Riprova più tardi.");
        }
        setIsFetching(false);
    }

    function removeSearchFilter() {
        setSearchFilter('');
        fetchCategoryFoods();
    }

    if (isFetching) {
        return <LoadingOverlay text="Preparando i cibi..." />
    }

    const TagsContainer = (
        <View style={styles.tagsContainer}>
            <Tag text={searchFilter} onClose={removeSearchFilter} />
        </View>
    );

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Inserisci il nome di un prodotto, es: Uova"
                onChangeText={changeTextHandler}
                onPressSearchBtn={submitSearchHandler}
                value={searchText}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{availableMeals.length} risultati</Text>
            </View>
            <FoodsList
                foods={availableMeals}
                listOptions={{
                    numColumns: 2,
                    ListHeaderComponent: searchFilter && TagsContainer
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 20
    },
    text: {
        color: Colors.textSecondary,
        fontSize: 16
    },
    button: {
        fontWeight: 'bold',
        fontSize: 18
    },
    tagsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
});