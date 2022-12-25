import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { User } from './models/user';
import { Colors } from './constants/Colors';
import ProfileScreen from './screens/ProfileScreen';
import FoodDetails from './screens/NoWaste/FoodDetails';
import RideDetails from './screens/UrbinoChatCar/RideDetails';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function LogoTitle() {
  return (
    <Image
      style={{ width: 55, height: 35 }}
      source={require('./assets/logos/logo_white.png')}
    />
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  function TabNavigator() {
    return <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
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
        headerShown: false
      })}>
      <BottomTabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name='home' color={color} size={26} />
          },
        }}
      />
      <BottomTabs.Screen
        name='UrbinoChatCar'
        component={UrbinoChatCarScreen}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name='car-sport-outline' color={color} size={30} />
          }
        }}
      />
      <BottomTabs.Screen
        name='NoWaste'
        component={NoWasteHomeScreen}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name='pizza-outline' color={color} size={26} />
          }
        }}
      />
      <BottomTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name='person-outline' color={color} size={26} />
          }
        }}
      />
    </BottomTabs.Navigator>
  }

  function StackNavigator() {
    return <Stack.Navigator screenOptions={({ navigarion }) => ({
    })}>
      <Stack.Screen
        name="BottomTabs"
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='FoodDetails'
        component={FoodDetails}
        options={{
          title: 'Dettagli'
        }}
      />
      <Stack.Screen
        name='RideDetails'
        component={RideDetails}
      />
    </Stack.Navigator>
  }

  return <Drawer.Navigator
    drawerPosition='right'
    screenOptions={({ navigation }) => ({
      headerShown: "false",
      headerStyle: { backgroundColor: Colors.black },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: Colors.black,
        height: 56,
        paddingBottom: 5
      },
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
            onPress={() => { }}
          />
          <IconButton
            style={styles.icon}
            icon="chatbox-ellipses-outline"
            size={24}
            color={'gray'}
            onPress={() => { }}
          />
          <IconButton
            style={styles.icon}
            icon="notifications-outline"
            size={24}
            color={'gray'}
            onPress={() => { }}
          />
        </View>
      )
    })}
  >
    <Drawer.Screen
      name="Stack"
      component={StackNavigator}
    />
  </Drawer.Navigator>

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
        <Root />
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