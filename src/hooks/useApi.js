import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = () => {
  //--------APIs----------//
  const ApiFake = "https://fakestoreapi.com/products";
  const ApiDummy = "https://dummyjson.com/products";

  const [fakeProducts, setFakeProducts] = useState([]);
  const [dummyProducts, setDummyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState("");

  useEffect(() => {
    async function productsData() {
      try {
        const fake = await axios.get(ApiFake);
        setFakeProducts(fake.data);

        let dummy = await axios.get(ApiDummy);
        setDummyProducts(dummy.data.products);
      } catch (error) {
        console.log(error);
        setError(
          "Sorry, the server products failed to load! Make sure you're connected to the internet or you'll learn later.",
        );
      } finally {
        setLoading(false);
      }
    }
    productsData();
  }, []);

  const [mode, setMode] = useState(false);
  function handelMode() {
    setMode(!mode);
  }

  return { fakeProducts, dummyProducts, loading, Error, mode, handelMode };
};
