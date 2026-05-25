import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useContext } from "react";

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
import { apiContext } from "./context/ApiContext";

function App() {
  const { mode } = useContext(apiContext);
  return (
    <main className={mode ? `darkMode` : ""}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fackapi" element={<Outlet />}>
            <Route path="" element={<Fakeproducts />} />
            <Route path="product/:id" element={<Details />} />
          </Route>
          <Route path="/dummyapi" element={<Outlet />}>
            <Route path="" element={<Dummyproducts />} />
            <Route path="product/:id" element={<Details />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
