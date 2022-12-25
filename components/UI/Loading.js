import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = ({ text }) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 12,
        fontSize: 18,
        color: '#333333',
    },
});

export default Loading;
