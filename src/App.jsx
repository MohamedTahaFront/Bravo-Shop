import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Fakeproducts from "./components/Api/Fakeproducts";
import Dummyproducts from "./components/Api/Dummyproducts";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { apiContext } from "./context/ApiContext";
import Layout from "./Layout";

function App() {
  const { mode } = useContext(apiContext);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },
        {
          path: "fakeapi",
          children: [
            { index: true, element: <Fakeproducts /> },
            { path: "product/:id", element: <Details /> },
          ],
        },
        {
          path: "dummyapi",
          children: [
            { index: true, element: <Dummyproducts /> },
            { path: "product/:id", element: <Details /> },
          ],
        },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <main className={mode ? `darkMode` : ""}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
