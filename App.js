import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useCallback, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshAuth } from './utils/Requests';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

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
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon='exit'
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          )
        }}
      />
    </Stack.Navigator>
  )
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
          const storedRefreshToken = await AsyncStorage.getItem('refresh-token');
          const storedStartTimeString = await AsyncStorage.getItem('start-time');
          const storedStartTime = JSON.parse(storedStartTimeString);

          // elapsed minutes
          const now = new Date().getTime();
          const elapsedMillis = now - storedStartTime;
          let elapsedSeconds = elapsedMillis / 1000;
          let elapsedMinutes = elapsedSeconds / 60;

          if (elapsedMinutes < 59) {
            // authenticate with stored token
            authCtx.authenticate(storedToken, storedRefreshToken);
          } else {
            // token expired, fetch new token
            const authObj = await refreshAuth(storedRefreshToken);
            authCtx.authenticate(authObj.token, authObj.refreshToken);
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
