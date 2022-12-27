import { View, Text, StyleSheet, Pressable, Alert, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { useCameraPermissions, launchCameraAsync, PermissionStatus } from "expo-image-picker";
import { useState } from "react";

export default function ImagePicker({
    title,
    description,
    onTakeImage
}) {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermission() {
        const permissionResponse = await requestPermission();

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Permessi insufficienti!',
                "Devi consentire i permessi per aggiungere un prodotto"
            );
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermissions = await verifyPermission();

        if (!hasPermissions) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });

        setPickedImage(image.assets[0].uri);
        onTakeImage(image.assets[0].uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.imageTextContainer}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>{description}</Text>
                </View>
                <Pressable onPress={takeImageHandler}>
                    <View style={styles.addButton}>
                        <Ionicons name="add" size={24} color="#797979" />
                    </View>
                </Pressable>
            </View>
            <View>
                {
                    pickedImage && <Image style={styles.image} source={{ uri: pickedImage }} />
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    imageTextContainer: {
        width: '80%'
    },
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 10,
        resizeMode: 'cover'
    }
});