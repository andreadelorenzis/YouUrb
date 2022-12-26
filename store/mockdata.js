import { FoodCategory } from "../models/FoodCategory";
import { Food } from "../models/Food";
import { Ride } from "../models/Ride";

export const CATEGORIES = [
    new FoodCategory(
        'Frutta e verdura',
        require('../assets/foods/frutta.jpg'),
        'cat1',
    ),
    new FoodCategory(
        'Carne e pesce',
        require('../assets/foods/carne_pesce.jpg'),
        'cat2',
    ),
    new FoodCategory(
        'Pane e dolci',
        require('../assets/foods/pane.jpg'),
        'cat3',
    ),
    new FoodCategory(
        'Prodotti latticino caseari',
        require('../assets/foods/formaggi.jpg'),
        'cat4',
    ),
    new FoodCategory(
        'Pasta riso e cereali',
        require('../assets/foods/pasta.jpg'),
        'cat5',
    ),
    new FoodCategory(
        'Alimenti salati e snack',
        require('../assets/foods/snack.jpg'),
        'cat6',
    ),
    new FoodCategory(
        'Surgelati e gelati',
        require('../assets/foods/gelato.jpg'),
        'cat7',
    ),
    new FoodCategory(
        'Bevande',
        require('../assets/foods/bevande.jpg'),
        'cat8',
    ),
    new FoodCategory(
        'Prodotti da dispensa',
        require('../assets/foods/tonno.jpg'),
        'cat9',
    )
];

export const FOODS = [
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Uova",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/uova.jpg"),
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        ['cat4'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Rigatoni",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        1.50,
        require("../assets/foods/rigatoni.jpg"),
        {
            name: "andrew22",
            imageUri: require("../assets/people/craig.jpg"),
        },
        ['cat5'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Riso",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        3.00,
        require("../assets/foods/riso.jpg"),
        {
            name: "ethanD",
            imageUri: require("../assets/people/ethan.jpg"),
        },
        ['cat5'],
        Math.random().toString(36).substring(2, 9),
    ),
    new Food(
        "Tonno",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        2.00,
        require("../assets/foods/tonno.jpg"),
        {
            name: "julian99",
            imageUri: require("../assets/people/julian.jpg"),
        },
        ['cat9'],
        Math.random().toString(36).substring(2, 9),
    )
];

export const CART = [
    FOODS[0],
    FOODS[1]
]

export const RIDES = [
    new Ride(
        'Urbino',
        'Roma',
        "24/01/2022",
        '5,00€',
        4,
        2,
        {
            name: "marcolol",
            imageUri: require("../assets/people/luis.jpg"),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Milano',
        "24/01/2022",
        '12,00€',
        4,
        3,
        {
            name: "sMarcus11",
            imageUri: require("../assets/people/michael.jpg"),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Bologna',
        "24/01/2022",
        '4,50€',
        4,
        0,
        {
            name: "davincisara",
            imageUri: require("../assets/people/jason.jpg"),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Ancona',
        "24/01/2022",
        '4,00€',
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
        },
        Math.random().toString(36).substring(2, 9)
    ),
];

export function simulateFetch() {
    return new Promise((resolve, reject) => {
        // Simulate a delay of 1 second
        setTimeout(() => {
            let response = {}
            // Resolve the promise with the data
            resolve(response);
        }, 1000);
    });
}