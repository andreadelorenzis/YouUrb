import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export default function CustomCarousel() {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);


    const data = [
        { imageUri: require('../../assets/foods/pane.jpg') },
        { imageUri: require('../../assets/foods/pasta.jpg') },
        { imageUri: require('../../assets/foods/riso.jpg') },
    ]

    function renderItem({ item, index }) {
        return (
            <View style={styles.itemContainer} key={index}>
                <Image
                    source={item.imageUri}
                    style={styles.image}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                sliderHeight={400}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 10
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
    },
    image: {
        width: ITEM_WIDTH,
        height: 200,
        resizeMode: 'contain'
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
});
