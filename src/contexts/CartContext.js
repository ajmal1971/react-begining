import { createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = CartContext.Provider;

export default function useCartContext() {
    return useContext(CartContext);
}