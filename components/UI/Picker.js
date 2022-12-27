import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CustomPicker({
    label,
    items,
    selectedValue,
    onValueChange,
    style
}) {
    return (
        <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={[styles.picker, style]}
            >
                {items.map((item) => (
                    <Picker.Item label={item.label} value={item.value} key={item.value} />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#F2F2F2',
        marginBottom: 20,
        backgroundColor: 'white'
    },
    inputLabel: {
        marginBottom: 10
    },
});