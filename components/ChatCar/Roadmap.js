import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";

export default function Roadmap({ departure, destination }) {
    return (
        <View style={styles.line}>
            <View style={styles.dot}>
                <Text style={styles.dotText}>{departure}</Text>
            </View>
            <View style={styles.lineMiddle} />
            <View style={styles.dot}>
                <Ionicons
                    name="location"
                    style={styles.markerIcon}
                    size={30}
                    color="#F42E0F"
                />
                <Text style={styles.dotText}>{destination}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 4,
        backgroundColor: '#333',
        position: 'relative',
        backgroundColor: Colors.red
    },
    markerIcon: {
        position: 'absolute',
        top: -25,
        left: -10,
        width: 30
    },
    dotText: {
        position: 'absolute',
        top: 10,
        left: -45,
        width: '100%',
        width: 100,
        textAlign: 'center',
    },
    lineMiddle: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.red,
    },
});