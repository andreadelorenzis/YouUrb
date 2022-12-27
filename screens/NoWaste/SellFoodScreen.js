import { useEffect, useState } from "react";
import { SafeAreaView, Alert, StyleSheet, Text } from "react-native";
import TextInput from "../../components/UI/TextInput";
import Picker from "../../components/UI/Picker";
import { CATEGORIES } from '../../store/mockdata';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { Colors } from "../../constants/Colors";
import ImagePicker from "../../components/NoWaste/ImagePicker";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/UI/Button";

export default function SellFoodScreen() {
    const [inputValues, setInputValues] = useState({
        name: '',
        price: '',
        description: ''
    });
    const [category, setCategory] = useState('choose');
    const [isLoading, setIsLoading] = useState(true);
    const [pickerCategories, setPickerCategories] = useState([]);
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();

    useEffect(() => {
        setIsLoading(true);
        const items = [];
        for (let i = 0; i < CATEGORIES.length; i++) {
            const categoryItem = {
                label: CATEGORIES[i].name,
                value: CATEGORIES[i].name
            };
            items.push(categoryItem);
        }
        const defaultValue = {
            label: 'Scegli una categoria',
            value: "choose"
        }
        items.push(defaultValue);
        setPickerCategories(items);
        setIsLoading(false);
    }, []);

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case "name":
                setInputValues({
                    ...inputValues,
                    name: enteredValue,
                });
                break;
            case "description":
                setInputValues({
                    ...inputValues,
                    description: enteredValue,
                });
                break;
            case "price":
                setInputValues({
                    ...inputValues,
                    price: enteredValue,
                });
                break;
        }
    }

    function onPickerSelectHandler(selectedValue) {
        if (selectedValue !== 'choose') {
            setCategory(selectedValue);
        }
    }

    function takeImage1Handler(imageUri) {
        setImage1(imageUri);
    }

    function takeImage2Handler(imageUri) {
        setImage2(imageUri);
    }

    function takeImage3Handler(imageUri) {
        setImage3(imageUri);
    }

    function onSubmitHandler() {
        if (
            inputValues.name === '' ||
            inputValues.price === ''
        ) {
            Alert.alert('Compila tutti i campi obbligatori');
            return;
        } else if (category === 'choose') {
            Alert.alert('Scegli una categoria alimentare');
            return;
        } else if (inputValues.price < 0) {
            Alert.alert('Inserisci un prezzo valido');
            return;
        } else if (!image1 || !image2 || !image3) {
            Alert.alert('Foto del prodotto mancanti');
            return;
        }

        console.log('Submit');
    }

    if (isLoading) {
        return <LoadingOverlay />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput
                    label="Nome prodotto:"
                    type="name"
                    placeholder="Inserisci il nome del prodotto, es: Uova"
                    onChangeText={updateInputValueHandler}
                    value={inputValues.name}
                />
                <Picker
                    label="Categoria"
                    items={pickerCategories}
                    selectedValue={category}
                    onValueChange={onPickerSelectHandler}
                />
                <TextInput
                    label="Prezzo:"
                    type="price"
                    placeholder="Inserisci il prezzo del prodotto, es: 2.99"
                    onChangeText={updateInputValueHandler}
                    value={inputValues.price}
                    textInputConfig={{
                        keyboardType: 'decimal-pad'
                    }}
                />
                <TextInput
                    label="Descrizione:"
                    type="description"
                    placeholder="Inserisci una breve descrizione del prodotto."
                    onChangeText={updateInputValueHandler}
                    value={inputValues.description}
                    style={{ marginBottom: 10 }}
                    textInputConfig={{
                        multiline: true
                    }}
                />
                <Text style={styles.text}>Inserisci le immagini del prodotto:</Text>
                <ImagePicker
                    title='Immagine di copertina'
                    description="L'immagine del prodotto che verrà visualizzata sulla homepage."
                    onTakeImage={takeImage1Handler}
                />
                <ImagePicker
                    title="Immagine etichetta"
                    description="Fai una foto dell'etichetta con i valori nutrizionali del prodotto."
                    onTakeImage={takeImage2Handler}
                />
                <ImagePicker
                    title="Immagine data scadenza"
                    description="Il lato con la data di scadenza del prodotto."
                    onTakeImage={takeImage3Handler}
                />
                <Button style={styles.button} onPress={onSubmitHandler}>
                    Pubblica prodotto
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
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
    button: {
        marginVertical: 20,
        marginTop: 30,
        backgroundColor: Colors.green,
        width: '100%',
    }
});
