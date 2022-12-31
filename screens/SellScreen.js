import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SellScreen() {

    const navigation = useNavigation();

    function openSellFoodsPageHandler() {
        navigation.navigate('SellFood');
    }

    function openSellRidesCarPageHandler() {
        navigation.navigate('OfferRide');
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={openSellFoodsPageHandler}
                style={[
                    ({ pressed }) => pressed && styles.pressed,
                    styles.pressable
                ]}
            >
                <View style={[styles.button, styles.topButton]}>
                    <Image style={styles.image} source={require('../assets/foods/food.png')} />
                    <Text style={styles.text}>Vendi un alimento</Text>
                </View>
            </Pressable>
            <View style={[styles.button, styles.bottomButton]}>
                <Pressable
                    onPress={openSellRidesCarPageHandler}
                    style={[
                        ({ pressed }) => pressed && styles.pressed,
                        styles.pressable
                    ]}
                >
                    <Image style={styles.image} source={require('../assets/foods/car_icon.png')} />
                    <Text style={styles.text}>Offri un passaggio</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 250,
        height: 250,
        borderRadius: 125,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        marginVertical: 15
    },
    topButton: {
        backgroundColor: Colors.green
    },
    bottomButton: {
        backgroundColor: Colors.red
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 125
    },
    pressed: {
        opacity: 0.5
    }
});
