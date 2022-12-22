import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    refreshToke: '',
    isAuthenticated: false,
    authenticate: (token, refreshToken) => { },
    logout: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState('');
    const [authRefreshToken, setAuthRefreshToken] = useState();

    function authenticate(token, refreshToken) {
        setAuthToken(token);
        setAuthRefreshToken(refreshToken);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('refresh-token', refreshToken);
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
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;