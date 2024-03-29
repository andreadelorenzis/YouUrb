import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import ProfilePicture from '../components/User/ProfilePicture';
import { FOODS, RIDES, simulateFetch } from '../store/mockdata';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import FoodsList from '../components/NoWaste/FoodsList';
import RidesList from '../components/ChatCar/RidesList';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { FoodContext } from '../store/foods-context';

export default function HomeScreen() {
    const [isFetching, setIsFetching] = useState(false);

    const user = useContext(AuthContext).user;

    const navigation = useNavigation();

    const foodsCtx = useContext(FoodContext);

    // fetch foods on app start
    useEffect(() => {
        async function fetchFoods() {
            setIsFetching(true);
            try {
                const response = await simulateFetch();
                foodsCtx.loadFoods(FOODS);
            } catch (error) {
                console.warn(error);
            }
            setIsFetching(false);
        }

        fetchFoods();
    }, []);

    if (isFetching) {
        return <LoadingOverlay />
    }

    return (
        <>
            {
                user &&
                <ScrollView style={styles.container}>
                    <View>
                        <View style={styles.foodsHeader}>
                            <Text style={styles.foodsHeaderText}>Panoramica cibi</Text>
                            <TouchableOpacity>
                                <Text style={styles.foodsHeaderButton}>Vedi tutti</Text>
                            </TouchableOpacity>
                        </View>
                        <FoodsList
                            foods={FOODS}
                            listOptions={{
                                horizontal: true,
                                ListHeaderComponent: <View style={styles.margin} />
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.ridesHeader}>
                            <Text style={styles.ridesHeaderText}>Panoramica viaggi</Text>
                            <TouchableOpacity>
                                <Text style={styles.ridesHeaderButton}>Vedi tutti</Text>
                            </TouchableOpacity>
                        </View>
                        <RidesList
                            rides={RIDES}
                            listOptions={{
                                horizontal: true,
                                ListHeaderComponent: <View style={styles.margin} />
                            }}
                        />
                    </View>
                </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    foodsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 40
    },
    foodsHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    foodsHeaderButton: {
        color: Colors.green,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    ridesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
        paddingHorizontal: 20
    },
    ridesHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ridesHeaderButton: {
        color: Colors.red,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    margin: {
        marginLeft: 20
    }
});