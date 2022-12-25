const data = {
    foods: [
        {
            name: "Uova",
            price: '2,00€',
            user: {
                name: "Mary81",
                imageUri: require("../assets/people/vicky.jpg"),
            },
            imageUri: require("../assets/foods/uova.jpg"),
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            name: "Rigatoni",
            price: '1,50€',
            user: {
                name: "andrew22",
                imageUri: require("../assets/people/craig.jpg"),
            },
            imageUri: require("../assets/foods/rigatoni.jpg"),
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            name: "Riso",
            price: '3,00€',
            user: {
                name: "ethanD",
                imageUri: require("../assets/people/ethan.jpg"),
            },
            imageUri: require("../assets/foods/riso.jpg"),
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            name: "Tonno",
            price: '2,00€',
            user: {
                name: "julian99",
                imageUri: require("../assets/people/julian.jpg"),
            },
            imageUri: require("../assets/foods/tonno.jpg"),
            id: Math.random().toString(36).substring(2, 9)
        },
    ],
    rides: [
        {
            departure: 'Urbino',
            destination: 'Roma',
            date: "24/01/2022",
            price: '5,00€',
            totalSeats: 4,
            occupiedSeats: 2,
            user: {
                name: "marcolol",
                imageUri: require("../assets/people/luis.jpg"),
            },
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            departure: 'Urbino',
            destination: 'Milano',
            date: "24/01/2022",
            price: '12,00€',
            totalSeats: 4,
            occupiedSeats: 3,
            user: {
                name: "sMarcus11",
                imageUri: require("../assets/people/michael.jpg"),
            },
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            departure: 'Urbino',
            destination: 'Bologna',
            date: "24/01/2022",
            price: '4,50€',
            totalSeats: 4,
            occupiedSeats: 0,
            user: {
                name: "davincisara",
                imageUri: require("../assets/people/jason.jpg"),
            },
            id: Math.random().toString(36).substring(2, 9)
        },
        {
            departure: 'Urbino',
            destination: 'Ancona',
            date: "24/01/2022",
            price: '4,00€',
            totalSeats: 4,
            occupiedSeats: 0,
            user: {
                name: "Mary81",
                imageUri: require("../assets/people/vicky.jpg"),
            },
            id: Math.random().toString(36).substring(2, 9)
        }
    ]
}

export default data;