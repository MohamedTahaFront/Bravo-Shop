/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useApi } from "../hooks/useApi";

export const apiContext = createContext();

export const ApiContextProvider = ({ children }) => {

  const { fakeProducts, dummyProducts, loading, Error, mode, handelMode } = useApi();

  return (
    <apiContext.Provider value={{ fakeProducts, dummyProducts, loading, Error, mode, handelMode }}>
      {children}
    </apiContext.Provider>
  );
};
