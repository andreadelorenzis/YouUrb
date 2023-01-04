
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useContext, useEffect, useState } from "react";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { simulateFetch } from "../../store/mockdata";
import InformationScreen from "./InformationScreen";
import RatingsScreen from "./RatingsScreen";
import { PROFILES } from "../../store/mockdata";
import { Profile } from "../../models/Profile";
import { Review } from "../../models/Review";

export default function ProfileScreen({ route }) {
    const [user, setUser] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const [isMyProfile, setIsMyProfile] = useState(false);

    const myUserInfo = useContext(AuthContext).user;

    const mockData = new Profile(
        "",
        myUserInfo.name,
        "",
        "",
        5,
        [
            new Review(
                {
                    name: "ethanD",
                    imageUri: require("../../assets/people/ethan.jpg"),
                    profileId: "p3"
                },
                new Date(2023, 1, 24, 8, 40),
                5,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                Math.random().toString(36).substring(2, 9)
            ),
            new Review(
                {
                    name: "ethanD",
                    imageUri: require("../../assets/people/ethan.jpg"),
                    profileId: "p3"
                },
                new Date(2023, 1, 24, 8, 40),
                5,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                Math.random().toString(36).substring(2, 9)
            )
        ],
        [],
        [],
        myUserInfo.id
    );

    useEffect(() => {
        const userId = route.params ? route.params.userId : null;

        if (userId) {
            fetchProfileInfo();
            setIsMyProfile(false);
        } else {
            setUser(mockData);
            setIsMyProfile(true);
            setIsFetching(false);
        }
    }, []);

    async function fetchProfileInfo() {
        setIsFetching(true);
        try {
            const response = await simulateFetch();
            const fetchedUser = PROFILES.find(user => user.id === userId);
            setUser(fetchedUser);
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

    return <TopTabs.Navigator screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'black' }
    }}>
        <TopTabs.Screen
            name="Informazioni"
            children={(props) =>
                <InformationScreen {...props} user={user} isMyProfile={isMyProfile} />}
        />
        <TopTabs.Screen
            name="Recensioni"
            children={(props) =>
                <RatingsScreen {...props} user={user} isMyProfile={isMyProfile} />}
        />
    </TopTabs.Navigator>
}
