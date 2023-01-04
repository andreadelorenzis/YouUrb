import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useContext, useEffect, useState } from "react";
import ErrorOverlay from "../../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../../components/UI/LoadingOverlay";
import RidesOrderedScreen from "./RideOrdersScreen";
import FoodsOrderedScreen from "./FoodOrdersScreen";
import { MY_ORDERS } from "../../../store/mockdata";
import { simulateFetch } from "../../../store/mockdata";

export default function MyOrdersScreen() {
    const [orders, setOrders] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            setOrders(MY_ORDERS);
        } catch (error) {
            setError(error);
            console.warn(error);
        }
        setIsFetching(false);
    }

    function errorHandler() {
        setError(null);
        fetchProfileInfo();
    }

    if (error && !isFetching) {
        return <ErrorOverlay
            message="C'è stato un errore. Riprova più tardi."
            onConfirm={errorHandler}
        />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    const TopTabs = createMaterialTopTabNavigator();

    return (
        <TopTabs.Navigator screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}>
            <TopTabs.Screen
                name="Passaggi"
                children={(props) =>
                    <RidesOrderedScreen {...props} rides={orders.rides} />}
            />
            <TopTabs.Screen
                name="Cibi"
                children={(props) =>
                    <FoodsOrderedScreen {...props} foods={orders.foods} />}
            />
        </TopTabs.Navigator>
    )
}
