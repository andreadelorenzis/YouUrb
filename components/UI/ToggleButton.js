import React, { useState } from 'react';
import { View, Pressable, Animated, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function ({ value, type, onValueChange, label }) {
    const [toggled, setToggled] = useState(value);
    const animationValue = new Animated.Value(toggled ? 1 : 0);

    function toggle() {
        setToggled(!toggled);
        Animated.timing(animationValue, {
            toValue: toggled ? 0 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
        onValueChange(type, !toggled);
    }

    return (
        <Pressable onPress={toggle}>
            {label && <Text style={styles.labelText}>{label}</Text>}
            <View style={styles.container}>
                <View style={[
                    styles.toggleButton,
                    { backgroundColor: toggled ? Colors.red : '#ccc' }
                ]}>
                    <Animated.View
                        style={[{
                            transform: [
                                {
                                    translateX: animationValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [2, 16],
                                    }),
                                },
                            ],
                        },
                        styles.circle]}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    toggleButton: {
        backgroundColor: '#ccc',
        borderRadius: 20,
        width: 40,
        height: 25,
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    circle: {
        backgroundColor: 'white',
        borderRadius: 12.5,
        width: 22,
        height: 22,
    },
    labelText: {
        marginBottom: 15,
    },
    text: {
        fontSize: 16
    }
});