import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    refreshToken: '',
    user: null,
    isAuthenticated: false,
    authenticate: (token, refreshToken) => { },
    logout: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState('');
    const [authRefreshToken, setAuthRefreshToken] = useState();
    const [authUser, setAuthUser] = useState();

    function authenticate(token, refreshToken, user) {
        setAuthToken(token);
        setAuthRefreshToken(refreshToken);
        setAuthUser(user);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('refresh-token', refreshToken);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }

    function logout() {
        setAuthToken(null);
        setAuthRefreshToken(null);
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('refresh-token');
        AsyncStorage.removeItem('start-time');
    }

    const value = {
        token: authToken,
        refreshToken: authRefreshToken,
        user: authUser,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;