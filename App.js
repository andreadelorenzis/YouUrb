import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useCallback, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshAuth } from './utils/Requests';
import IconButton from './components/UI/IconButton';
import NoWasteHomeScreen from './screens/NoWaste/HomeScreen';
import UrbinoChatCarScreen from './screens/UrbinoChatCar/HomeScreen';
import { Colors } from './constants/Colors';
import FoodDetailsScreen from './screens/NoWaste/FoodDetailsScreen';
import RideDetailsScreen from './screens/UrbinoChatCar/RideDetails';
import CategoryFoodsScreen from './screens/NoWaste/CategoryFoodsScreen';
import CartScreen from './screens/NoWaste/FoodsCartScreen';
import FoodsContextProvider from './store/foods-context';
import SellScreen from './screens/SellScreen';
import SellFoodScreen from './screens/NoWaste/SellFoodScreen';
import OfferRideScreen from './screens/UrbinoChatCar/OfferRideScreen';
import MyOrdersScreen from './screens/Profile/Orders/MyOrdersScreen';
import MyProductsScreen from './screens/NoWaste/MyProductsScreen';
import MyRidesScreen from './screens/UrbinoChatCar/MyRidesScreen';
import BalanceScreen from './screens/Profile/BalanceScreen';
import MessagesScreen from './screens/Inbox/MessagesScreen';
import NotificationsScreen from './screens/Inbox/NotificationsScreen';
import RidesBookedScreen from './screens/UrbinoChatCar/RidesBookedScreen';
import RidesOverviewScreen from './screens/UrbinoChatCar/RidesOverviewScreen';
import ProfileDashboard from './screens/Profile/ProfileDashboard';
import ProfileScreen from './screens/Profile/ProfileScreen';
import SettingsScreen from './screens/Profile/Settings/SettingsScreen';
import ProfileData from './screens/Profile/Settings/ProfileDataScreen';
import AccountSettings from './screens/Profile/Settings/AccountSettingsScreen';
import PaymentSettings from './screens/Profile/Settings/PaymentSettingsScreen';
import PushNotificationsScreen from './screens/Profile/Settings/PushNotificationsScreen';
import EmailNotificationsScreen from './screens/Profile/Settings/EmailNotificationsScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function UnauthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Landing'
        component={LandingScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
      />
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerShown: false,
      headerStyle: { backgroundColor: Colors.black },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: Colors.black,
        height: 56,
        paddingBottom: 5
      },
      tabBarActiveTintColor: 'white',
      headerTitle: LogoTitle,
      tabBarLabel: () => { return null },
      headerRightContainerStyle: {
        paddingRight: 20,
      },
      tabBarActiveTintColor: 'white',
      headerTitle: LogoTitle,
      tabBarLabel: () => { return null },
      headerRight: ({ tintColor }) => (
        <View style={styles.headerIconsContainer}>
          <IconButton
            style={styles.icon}
            icon="location-outline"
            size={24}
            color={'gray'}
            onPress={() => { }}
          />
          <IconButton
            style={styles.icon}
            icon="cart-outline"
            size={24}
            color={'gray'}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          />
          <IconButton
            style={styles.icon}
            icon="mail-outline"
            size={24}
            color={'gray'}
            onPress={() => {
              navigation.navigate('Inbox')
            }}
          />
        </View>
      )
    })}>
    <BottomTabs.Screen
      name='HomeStack'
      component={HomeStackNavigator}
      options={{
        tabBarIcon({ color, size }) {
          return <Ionicons name='home' color={color} size={26} />
        },
      }}
    />
    <BottomTabs.Screen
      name='RidesStack'
      component={RidesStackNavigator}
      options={{
        tabBarIcon({ color, size }) {
          return <Ionicons name='car-sport-outline' color={color} size={30} />
        }
      }}
    />
    <BottomTabs.Screen
      name='SellStack'
      component={SellStackNavigator}
      options={{
        tabBarIcon({ color, size }) {
          return <Ionicons
            name='add-circle-outline'
            color={color}
            size={32}
            style={{ marginTop: 3 }}
          />
        }
      }}
    />
    <BottomTabs.Screen
      name='FoodsStack'
      component={FoodsStackNavigator}
      options={{
        tabBarIcon({ color, size }) {
          return <Ionicons name='pizza-outline' color={color} size={26} />
        }
      }}
    />
    <BottomTabs.Screen
      name='ProfileStack'
      component={ProfileStackNavigator}
      options={{
        tabBarIcon({ color, size }) {
          return <Ionicons name='person-outline' color={color} size={26} />
        }
      }}
    />
  </BottomTabs.Navigator>
}

function InboxNavigator() {
  return <TopTabs.Navigator screenOptions={{
    tabBarIndicatorStyle: { backgroundColor: 'black' }
  }}>
    <TopTabs.Screen
      name="Messaggi"
      component={MessagesScreen}
    />
    <TopTabs.Screen
      name="Notifiche"
      component={NotificationsScreen}
    />
  </TopTabs.Navigator>
}

const commonStackOptions = {
  headerStyle: { backgroundColor: Colors.black },
  headerTintColor: 'white',
  tabBarStyle: {
    backgroundColor: Colors.black,
    height: 56,
    paddingBottom: 5
  },
  tabBarActiveTintColor: 'white',
  headerRightContainerStyle: {
    paddingRight: 20,
  },
  tabBarActiveTintColor: 'white',
  tabBarLabel: () => { return null },
}

function HomeStackNavigator() {
  return <Stack.Navigator screenOptions={({ navigation }) => ({
    ...commonStackOptions,
    headerTitle: LogoTitle,
    headerRight: ({ tintColor }) => (
      <View style={styles.headerIconsContainer}>
        <IconButton
          style={styles.icon}
          icon="location-outline"
          size={24}
          color={'gray'}
          onPress={() => {
            navigation.navigate('RidesBooked');
          }}
        />
        <IconButton
          style={styles.icon}
          icon="cart-outline"
          size={24}
          color={'gray'}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
        <IconButton
          style={styles.icon}
          icon="mail-outline"
          size={24}
          color={'gray'}
          onPress={() => {
            navigation.navigate('Inbox')
          }}
        />
      </View>
    )
  })}>
    <Stack.Screen
      name='Home'
      component={HomeScreen}
    />
    <Stack.Screen
      name='FoodDetails'
      component={FoodDetailsScreen}
      options={{
        headerTitle: 'Dettagli',
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='RideDetails'
      component={RideDetailsScreen}
      options={{
        headerTitle: 'Dettagli',
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='Inbox'
      component={InboxNavigator}
      options={{
        headerTitle: 'Inbox',
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='Cart'
      component={CartScreen}
      options={{
        headerTitle: "Carrello",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='RidesBooked'
      component={RidesBookedScreen}
      options={{
        headerTitle: "Passaggi prenotati",
        headerRight: () => null
      }}
    />
  </Stack.Navigator>
}

function RidesStackNavigator() {
  return <Stack.Navigator screenOptions={{
    ...commonStackOptions
  }}>
    <Stack.Screen
      name='ChatCar'
      component={UrbinoChatCarScreen}
      options={{
        title: "Trova un viaggio"
      }}
    />
    <Stack.Screen
      name='RideDetails'
      component={RideDetailsScreen}
      options={{
        headerTitle: 'Dettagli',
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='RidesOverview'
      component={RidesOverviewScreen}
      options={{
        headerTitle: 'Passaggi trovati',
        headerRight: () => null
      }}
    />
  </Stack.Navigator>
}

function SellStackNavigator() {
  return <Stack.Navigator screenOptions={{
    ...commonStackOptions
  }}>
    <Stack.Screen
      name='SellScreen'
      component={SellScreen}
      options={{
        headerTitle: "Scegli come guadagnare"
      }}
    />
    <Stack.Screen
      name='SellFood'
      component={SellFoodScreen}
      options={{
        headerTitle: "Vendi un prodotto",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='OfferRide'
      component={OfferRideScreen}
      options={{
        headerTitle: "Offri un passaggio",
        headerRight: () => null
      }}
    />
  </Stack.Navigator>
}

function FoodsStackNavigator() {
  return <Stack.Navigator screenOptions={{
    ...commonStackOptions
  }}>
    <Stack.Screen
      name='NoWaste'
      component={NoWasteHomeScreen}
    />
    <Stack.Screen
      name="FoodsCategory"
      component={CategoryFoodsScreen}
      options={{
        headerTitle: 'Categorie'
      }}
    />
    <Stack.Screen
      name='FoodDetails'
      component={FoodDetailsScreen}
      options={{
        headerTitle: 'Dettagli',
        headerRight: () => null
      }}
    />
  </Stack.Navigator>
}

function ProfileStackNavigator() {
  return <Stack.Navigator screenOptions={{
    ...commonStackOptions
  }}>
    <Stack.Screen
      name='Profile'
      component={ProfileDashboard}
    />
    <Stack.Screen
      name='ProfileDetails'
      component={ProfileScreen}
      options={{
        headerTitle: "Profilo"
      }}
    />
    <Stack.Screen
      name='MyOrders'
      component={MyOrdersScreen}
      options={{
        headerTitle: "I miei ordini",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='MyProducts'
      component={MyProductsScreen}
      options={{
        headerTitle: "La mia vetrina",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='MyRides'
      component={MyRidesScreen}
      options={{
        headerTitle: "I miei passaggi",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='Balance'
      component={BalanceScreen}
      options={{
        headerTitle: "Saldo",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='Settings'
      component={SettingsScreen}
      options={{
        headerTitle: "Impostazioni",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='ProfileData'
      component={ProfileData}
      options={{
        headerTitle: "Dati profilo",
        headerRight: ({ tintColor }) => <Ionicons name='checkmark-outline' size={24} color={tintColor} />
      }}
    />
    <Stack.Screen
      name='AccountSettings'
      component={AccountSettings}
      options={{
        headerTitle: "Impostazioni account",
        headerRight: ({ tintColor }) => <Ionicons name='checkmark-outline' size={24} color={tintColor} />
      }}
    />
    <Stack.Screen
      name='PaymentSettings'
      component={PaymentSettings}
      options={{
        headerTitle: "Impostazioni pagamento",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='PushNotificationsSettings'
      component={PushNotificationsScreen}
      options={{
        headerTitle: "Notifiche push",
        headerRight: () => null
      }}
    />
    <Stack.Screen
      name='EmailNotificationsSettings'
      component={EmailNotificationsScreen}
      options={{
        headerTitle: "Notifiche email",
        headerRight: () => null
      }}
    />
  </Stack.Navigator>
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 55, height: 35 }}
      source={require('./assets/logos/logo_white.png')}
    />
  );
}

function AuthHandler({ onLayout }) {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer onReady={onLayout}>
      {!authCtx.isAuthenticated && <UnauthenticatedStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [appIsReady, setAppIsReady] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          // get stored refresh token and start time
          const storedRefreshToken = await AsyncStorage.getItem('refresh-token');
          const storedStartTimeString = await AsyncStorage.getItem('start-time');
          const storedStartTime = JSON.parse(storedStartTimeString);

          // get user object
          const userString = await AsyncStorage.getItem('user');
          const user = JSON.parse(userString);

          // elapsed minutes
          const now = new Date().getTime();
          const elapsedMillis = now - storedStartTime;
          let elapsedSeconds = elapsedMillis / 1000;
          let elapsedMinutes = elapsedSeconds / 60;

          if (elapsedMinutes < 59) {

            // authenticate with stored token
            authCtx.authenticate(storedToken, storedRefreshToken, user);
          } else {
            // token expired, fetch new token
            const authObj = await refreshAuth(storedRefreshToken);
            authCtx.authenticate(authObj.token, authObj.refreshToken, user);
            AsyncStorage.setItem('start-time', JSON.stringify(Date.now()));
          }
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    fetchToken();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  });

  if (!appIsReady) {
    return null;
  }

  return <AuthHandler onLayout={onLayoutRootView} />
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <FoodsContextProvider>
          <Root />
        </FoodsContextProvider>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  headerIconsContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 15,

  }
});