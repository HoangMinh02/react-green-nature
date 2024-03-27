import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_CART") ? JSON.parse(localStorage.getItem("LIST_CART")) : []);
    const addToCart = (product, inputQuantity) => {
        console.log(inputQuantity);
        const newCart = [...cart];

        const checkIndex = newCart.findIndex((item) => item.id === product.id);

        if (checkIndex >= 0) {
            newCart[checkIndex].quantity += inputQuantity;
        } else {
            product.quantity = inputQuantity;
            newCart.push(product);
        }
        setCart(newCart);
        localStorage.setItem("LIST_CART", JSON.stringify(newCart));
    };
    const deleteToCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };
    const deleteAllCart = () => {
        setCart([]);
        localStorage.removeItem("LIST_CART", JSON.stringify());
    };
    return <CartContext.Provider value={{ addToCart, cart, deleteToCart, deleteAllCart }}>{children}</CartContext.Provider>;
};

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart };
