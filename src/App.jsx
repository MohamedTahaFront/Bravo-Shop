import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Fakeproducts from "./components/Api/Fakeproducts";
import Dummyproducts from "./components/Api/Dummyproducts";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  //--------APIs----------//
  const ApiFake = "https://fakestoreapi.com/products";
  const ApiDummy = "https://dummyjson.com/products";
  //--------Stats--------//
  const [fakeProducts, setFakeProducts] = useState([]);
  const [dummyProducts, setDummyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || [],
  );

  const [mode, setMode] = useState(false);
  function handelMode() {
    setMode(!mode);
  }

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

  //-------cart--------//
  function addToCart(product) {
    const isExist = cart.find((item) => item.title === product.title);
    if (isExist) {
      Swal.fire({
        title: "this product you already added !",
        icon: "info",
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: `Your Product <span class='text-primary'>(${product.title})</span> add Successfully`,
        icon: "success",
        showConfirmButton: false,
        timer: 1200,
      });
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function deleteProduct(product) {
    Swal.fire({
      title: `Are you sure to delete product <br> <span class=" text-danger">(${product.title})</span>`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        let newCart = cart.filter((ele) => ele.title !== product.title);
        setCart(newCart);
      }
    });
  }
  function increment(product) {
    const newCart = cart.map((item) =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
    setCart(newCart);
  }
  function decrement(product) {
    const newCart = cart.map((item) =>
      item.title === product.title && product.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(newCart);
  }
  //--------wishlist-------//
  function addToWishList(product) {
    const isExist = wishList.find((item) => item.title === product.title);
    if (isExist) {
      Swal.fire({
        title: "this product you already added !",
        icon: "info",
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: `Your Product <span class='text-primary'>(${product.title})</span> add Successfully`,
        icon: "success",
        showConfirmButton: false,
        timer: 1200,
      });
      setWishList([...wishList, product]);
    }
  }
  function deleteWishList(product) {
    Swal.fire({
      title: `Are you sure to delete product <br> <span class=" text-danger">(${product.title})</span>`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const newWishList = wishList.filter(
          (item) => item.title !== product.title,
        );
        setWishList(newWishList);
      }
    });
  }
  //---------useeffects---------//
  //-----storage--------//
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [cart, wishList]);
  //-----storage--------//

  return (
    <main className={mode ? `darkMode` : ""}>
      <BrowserRouter>
        <Navbar
          cart={cart}
          wishList={wishList}
          handelMode={handelMode}
          mode={mode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home addToCart={addToCart} addToWishList={addToWishList} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <Shop
                Error={Error}
                loading={loading}
                fakeProducts={fakeProducts}
                addToWishList={addToWishList}
                addToCart={addToCart}
                dummyProducts={dummyProducts}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fackapi" element={<Outlet />}>
            <Route
              path=""
              element={
                <Fakeproducts
                  Error={Error}
                  loading={loading}
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  fakeProducts={fakeProducts}
                />
              }
            />
            <Route
              path="product/:id"
              element={<Details addToCart={addToCart} />}
            />
          </Route>
          <Route path="/dummyapi" element={<Outlet />}>
            <Route
              path=""
              element={
                <Dummyproducts
                  Error={Error}
                  loading={loading}
                  addToWishList={addToWishList}
                  addToCart={addToCart}
                  dummyProducts={dummyProducts}
                />
              }
            />
            <Route
              path="product/:id"
              element={<Details addToCart={addToCart} />}
            />
          </Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                deleteProduct={deleteProduct}
                increment={increment}
                decrement={decrement}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishList={wishList}
                addToCart={addToCart}
                deleteWishList={deleteWishList}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
