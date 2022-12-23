import { Text } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../store/auth-context';

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);

    const user = useContext(AuthContext).user;

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <>
            <Text>Welcome {user.name} {user.surname}</Text>
            <Text>{user.address}</Text>
            <Text>{user.fiscalCode}</Text>
            <Text>{user.cellphone}</Text>
            <Text>{user.faculty}</Text>
        </>
    )
}
