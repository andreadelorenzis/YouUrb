import { FoodCategory } from "../models/FoodCategory";
import { Food } from "../models/Food";
import { Ride } from "../models/Ride";
import { Review } from "../models/Review";
import { Profile } from "../models/Profile";

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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: 'p1'
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
            avgRating: 5,
            profileId: "p2"
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
            avgRating: 5,
            profileId: "p3"
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
            avgRating: 5,
            profileId: "p4"
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
        "Piazza della Repubblica, Urbino",
        new Date(2023, 1, 24, 8, 4),
        '5,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        2,
        {
            name: "marcolol",
            imageUri: require("../assets/people/luis.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Milano',
        "Piazza della Repubblica, Urbino",
        new Date(2023, 1, 24, 8, 40),
        '12,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        3,
        {
            name: "sMarcus11",
            imageUri: require("../assets/people/michael.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Bologna',
        "Piazza della Repubblica, Urbino",
        new Date(2023, 1, 24, 8, 40),
        '4,50€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "davincisara",
            imageUri: require("../assets/people/jason.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Urbino',
        'Ancona',
        "Piazza della Repubblica, Urbino",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Bologna',
        'Urbino',
        "Piazza Maggiore, Bologna",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Bologna',
        'Urbino',
        "Piazza Maggiore, Bologna",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Bologna',
        'Urbino',
        "Piazza Maggiore, Bologna",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Bologna',
        'Urbino',
        "Piazza Maggiore, Bologna",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
    new Ride(
        'Bologna',
        'Urbino',
        "Piazza Maggiore, Bologna",
        new Date(2023, 1, 24, 8, 40),
        '4,00€',
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        4,
        0,
        {
            name: "Mary81",
            imageUri: require("../assets/people/vicky.jpg"),
            avgRating: 5,
            profileId: Math.random().toString(36).substring(2, 9),
        },
        Math.random().toString(36).substring(2, 9)
    ),
];

export const PROFILES = [
    new Profile(
        require("../assets/people/julian.jpg"),
        "julian99",
        `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        "Roma, Italia",
        5,
        [
            new Review(
                {
                    name: "ethanD",
                    imageUri: require("../assets/people/ethan.jpg"),
                    profileId: "p3"
                },
                new Date(2023, 1, 24, 8, 40),
                5,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                Math.random().toString(36).substring(2, 9)
            )
        ],
        [
            FOODS[0],
            FOODS[1],
        ],
        [
            RIDES[0],
            RIDES[1],
        ]
    )
];

export const MY_PRODUCTS = [
    FOODS[0],
    FOODS[1]
];

export const MY_RIDES = [
    RIDES[0],
    RIDES[1]
];

export const MY_ORDERS = {
    foods: [
        {
            ...FOODS[0],
            date: new Date(2023, 1, 24, 8, 40),
        },
        {
            ...FOODS[1],
            date: new Date(2023, 1, 25, 8, 40),
        }
    ],
    rides: [
        {
            ...RIDES[0],
            date: new Date(2023, 1, 24, 8, 40),
        },
        {
            ...RIDES[1],
            date: new Date(2023, 1, 25, 8, 40),
        }
    ]
}

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