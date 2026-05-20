import "./Home.css";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Categories from "../Categories/Categories";
import Products from "../Products/Products.jsx";
import Slider from "../Slider/Slider.jsx";

function Home({ addToCart, addToWishList }) {
  return (
    <>
      <Header />
      <Services />
      <Categories />
      <Products addToCart={addToCart} addToWishList={addToWishList} />
      <Slider />
    </>
  );
}

export default Home;
