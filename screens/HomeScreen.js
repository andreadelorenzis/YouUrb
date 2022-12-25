import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../store/auth-context';
import ProfilePicture from '../components/User/ProfilePicture';
import data from '../store/mockdata';
import FoodCard from '../components/NoWaste/FoodCard';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../constants/Colors';
import RideCard from '../components/ChatCar/RideCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);

    const user = useContext(AuthContext).user;

    const navigation = useNavigation();

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    function renderFoodItem(itemData) {
        function pressFoodHandler() {
            navigation.navigate('FoodDetails', {
                foodId: itemData.item.id
            });
        }

        return <FoodCard food={itemData.item} onPress={pressFoodHandler} />
    }

    function renderRideItem(itemData) {
        function pressRideHandler() {
            navigation.navigate('RideDetails', {
                rideId: itemData.item.id
            });
        }

        return <RideCard ride={itemData.item} onPress={pressRideHandler} />
    }



    return (
        <>
            {
                user &&
                <ScrollView style={styles.container}>
                    <View style={styles.welcomeHeader}>
                        <ProfilePicture
                            source={require('../assets/people/albert.jpg')}
                            hasBorder={true}
                            size={100}
                        />
                        <Text style={styles.welcomeHeaderText}>Bentornato, {"\n"}
                            {user.name}!</Text>
                    </View>
                    <View style={styles.foodsContainer}>
                        <View style={styles.foodsHeader}>
                            <Text style={styles.foodsHeaderText}>Cibi disponibili</Text>
                            <TouchableOpacity>
                                <Text style={styles.foodsHeaderButton}>Vedi tutti</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={data.foods}
                            keyExtractor={(item) => item.id}
                            renderItem={renderFoodItem}
                            ListHeaderComponent={<View style={styles.margin} />}
                        />
                    </View>
                    <View style={styles.ridesContainer}>
                        <View style={styles.ridesHeader}>
                            <Text style={styles.ridesHeaderText}>Viaggi disponibili</Text>
                            <TouchableOpacity>
                                <Text style={styles.ridesHeaderButton}>Vedi tutti</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={data.rides}
                            keyExtractor={(item) => item.id}
                            renderItem={renderRideItem}
                            ListHeaderComponent={<View style={styles.margin} />}
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
    welcomeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20
    },
    welcomeHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20
    },
    foodsContainer: {
        paddingVertical: 10,
        flex: 1,
    },
    foodsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
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
        marginBottom: 20,
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
    ridesContainer: {
        marginBottom: 40
    },
    margin: {
        marginLeft: 20,
    }
});