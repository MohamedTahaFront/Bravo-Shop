import "../Products/Products.css";
import productsData from "../Products/Products";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { useContext } from "react";
import { apiContext } from "../../context/ApiContext";
import { cartContext } from "../../context/CartContect";
import { wishlistContext } from "../../context/WishlistContext";

function Shop() {

  const { Error, loading, fakeProducts, dummyProducts } = useContext(apiContext);
  const {addToCart} = useContext(cartContext);
  const {addToWishList} = useContext(wishlistContext);
  // ------------------- Loading , error -----------------------//

  if (loading)
    return (
      <div className="full">
        <PulseLoader color="#cece2b" />
      </div>
    );
  if (Error)
    return (
      <div className="full">
        <b className="h2">{Error}</b>
      </div>
    );
  // ------------------------------------------------------------//

  return (
    <div className="Products Shop">
      <div className="container">
        <h2 className="h2">All Products</h2>
        <div className="row g">
          {productsData.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.title}>
                <div className="card shadow text-center">
                  <img
                    className="card-img imgShop m-auto w-50"
                    src={product.img}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <b className="fs-3 title">{product.title}</b>
                    <div className="price d-flex align-items-center gap-2 justify-content-center">
                      <b>${product?.price?.toFixed(2)}</b>
                      <del className="text-muted">
                        ${product?.sale?.toFixed(2)}
                      </del>
                    </div>
                    <div className="stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="icons">
                      <div
                        className="icon radius-8"
                        onClick={() => addToWishList(product)}
                      >
                        <FaHeart />
                      </div>
                      <div
                        className="icon radius-8"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* ------------------------ */}
          {fakeProducts.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.title}>
                <div className="card shadow text-center">
                  <img
                    className="card-img imgShop m-auto w-50"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <b className="fs-3 title">{product.title}</b>
                    <div className="price d-flex align-items-center gap-2 justify-content-center">
                      <b>${product?.price?.toFixed(2)}</b>
                    </div>
                    <div className="stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="icons">
                      <div
                        className="icon radius-8"
                        onClick={() => addToWishList(product)}
                      >
                        <FaHeart />
                      </div>
                      <div
                        className="icon radius-8"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* ------------------------ */}
          {dummyProducts.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.title}>
                <div className="card shadow text-center">
                  <img
                    className="card-img imgShop m-auto w-50"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <b className="fs-3 title">{product.title}</b>
                    <div className="price d-flex align-items-center gap-2 justify-content-center">
                      <b>${product?.price?.toFixed(2)}</b>
                    </div>
                    <div className="stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="icons">
                      <div
                        className="icon radius-8"
                        onClick={() => addToWishList(product)}
                      >
                        <FaHeart />
                      </div>
                      <div
                        className="icon radius-8"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
