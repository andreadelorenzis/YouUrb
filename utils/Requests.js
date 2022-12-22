import axios from 'axios';
import { FIREBASE_KEY } from '@env';

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_KEY}`;

    const response = await axios.post(
        url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );

    const token = response.data.idToken;
    const refreshToken = response.data.refreshToken;

    return { token, refreshToken };
}

export async function refreshAuth(refreshToken) {
    const url = 'https://securetoken.googleapis.com/v1/token?key=' + FIREBASE_KEY;

    const response = await axios.post(
        url,
        {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        }
    );

    const token = response.data.id_token;
    const newRefreshToken = response.data.refresh_token;

    return {
        token: token,
        refreshToken: newRefreshToken
    }
}

export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export function loginUser(email, password) {
    return authenticate('signInWithPassword', email, password);
}