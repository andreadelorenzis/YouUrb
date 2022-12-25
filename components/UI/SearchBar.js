import { View, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder, onChangeText, value, onPressSearchBtn }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={onChangeText}
                    value={value}
                />
                <Pressable
                    android_ripple={{ color: 'ccc' }}
                    style={({ pressed }) => [styles.button, pressed ? styles.button : null]}
                    onPress={onPressSearchBtn}
                >
                    <Ionicons
                        name='search'
                        size={24}
                        color={'#808080'}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 5,
        width: '100%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 15
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    pressed: {
        opacity: 0.5
    }
});

export default SearchBar;

