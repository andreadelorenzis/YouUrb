import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, LayoutAnimation, Animated } from 'react-native';

const AuthProgressBar = ({ step }) => {
    const [selectedCircle, setSelectedCircle] = useState({
        circle1: true,
        circle2: false,
        circle3: false
    });

    const progress = useRef(new Animated.Value(0)).current;
    const width = progress.interpolate({
        inputRange: [0, 0.20, 0.5, 0.70, 1],
        outputRange: ['0%', '20%', '50%', '70%', '100%'],
    });

    useEffect(() => {
        let value = 0.2;
        if (step === 3) {
            value = 0.8;
            setSelectedCircle({
                circle1: true,
                circle2: true,
                circle3: true
            });
        } else if (step === 2) {
            value = 0.5;
            setSelectedCircle({
                circle1: true,
                circle2: true,
                circle3: false
            });
        } else if (step === 1) {
            value = 0.2;
            setSelectedCircle({
                circle1: true,
                circle2: false,
                circle3: false
            });
        }

        Animated.timing(progress, {
            toValue: value,
            duration: 0,
            useNativeDriver: false
        }).start();

    }, [step]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.background, { width }]} />
            <View style={styles.pointsContainer}>
                <View style={[
                    styles.point,
                    styles.point1,
                    selectedCircle.circle1 && styles.filled
                ]}>
                    <Text style={styles.number}>1</Text>
                    <Text style={styles.label}>Account</Text>
                </View>
                <View style={[
                    styles.point,
                    styles.point2,
                    selectedCircle.circle2 && styles.filled
                ]}>
                    <Text style={styles.number}>2</Text>
                    <Text style={styles.label}>Personali</Text>
                </View>
                <View style={[
                    styles.point,
                    styles.point3,
                    selectedCircle.circle3 && styles.filled
                ]}>
                    <Text style={styles.number}>3</Text>
                    <Text style={styles.label}>Fatturazione</Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 5,
        backgroundColor: '#C4C4C4',
        position: 'relative',
        width: '100%',
        marginVertical: 40,
    },
    background: {
        height: '100%',
        backgroundColor: '#FF715B',
    },
    pointsContainer: {
        width: '100%',
        position: 'absolute',
        top: -10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    point: {
        position: 'relative',
        width: 25,
        height: 25,
        borderRadius: 17.5,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
    },
    filled: {
        backgroundColor: '#FF715B'
    },
    number: {
        position: 'absolute',
        top: -30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        position: 'absolute',
        width: 80,
        bottom: -20,
        left: -15,
        fontSize: 12,
        fontWeight: 'bold'
    },
});

export default AuthProgressBar;
