/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { cart, addToCart, deleteProduct, increment, decrement } = useCart();

  return (
    <cartContext.Provider value={{ cart, addToCart, deleteProduct, increment, decrement }}>
      {children}
    </cartContext.Provider>
  );
};
