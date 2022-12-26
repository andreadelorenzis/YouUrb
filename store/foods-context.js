import { createContext, useState } from "react";

export const FoodContext = createContext({
    foods: [],
    cartItems: [],
    loadFoods: (foods) => { },
    loadFoodsInCart: (foods) => { },
    addFoodToCart: (food) => { },
    removeFoodFromCart: (food) => { },
    clearCart: () => { }
});

function FoodsContextProvider({ children }) {
    const [foods, setFoods] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    function loadFoods(foods) {
        setFoods(foods);
    }

    function loadFoodsInCart(foods) {
        setCartItems(foods);
    }

    function addFoodToCart(food) {
        setCartItems((prevInCart) => {
            return [...prevInCart, food];
        });
    }

    function removeFoodFromCart(foodId) {
        setCartItems((prevInCart) => {
            return prevInCart.filter(food => food.id !== foodId);
        });
    }

    function clearCart() {
        setCartItems([]);
    }

    const value = {
        foods: foods,
        cartItems: cartItems,
        loadFoods: loadFoods,
        loadFoodsInCart: loadFoodsInCart,
        addFoodToCart: addFoodToCart,
        removeFoodFromCart: removeFoodFromCart,
        clearCart: clearCart
    }

    return <FoodContext.Provider value={value}>
        {children}
    </FoodContext.Provider>
}

export default FoodsContextProvider;