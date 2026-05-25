/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useWishlist } from "../hooks/useWishlist";

export const wishlistContext = createContext();
export const WishlistContextProvider = ({ children }) => {
  const { wishList, addToWishList, deleteWishList } = useWishlist();
  return (
    <wishlistContext.Provider value={{ wishList, addToWishList, deleteWishList }}>
      {children}
    </wishlistContext.Provider>
  );
};
