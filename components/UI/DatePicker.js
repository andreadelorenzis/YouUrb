import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate } from "../../utils/Validation";

export default function DatePicker({ onChange, label }) {
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState(formatDate(new Date()));
    const [open, setOpen] = useState(false);

    function handleConfirm(selectedDate) {
        setDate(selectedDate);
        let tempDate = new Date(selectedDate);
        let formattedDate = formatDate(tempDate);
        setText(formattedDate);
        onChange(date);
        hideDatePicker();
    }

    function showDatePicker() {
        setOpen(true);
    }

    function hideDatePicker() {
        setOpen(false);
    }

    return (
        <View>
            <Text style={styles.labelText}>{label}</Text>
            <Pressable onPress={showDatePicker}>
                <View style={styles.dateContainer}>
                    <Text style={[styles.text]}>{text}</Text>
                    <Ionicons name="calendar-outline" size={24} color='#A69E9E' />
                </View>
            </Pressable>
            <DateTimePickerModal
                isVisible={open}
                mode='date'
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dateContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        alignItems: 'center'
    },
    text: {
        flex: 1,
        fontSize: 16
    },
    placeholder: {
        color: '#A69E9E'
    },
    labelText: {
        marginBottom: 10
    }
});
