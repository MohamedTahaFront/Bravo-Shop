import "./Products.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import productsData from "./Products";
import { useContext } from "react";
import { cartContext } from "../../context/CartContect";
import { wishlistContext } from "../../context/WishlistContext";

function Products() {
  const {addToCart} = useContext(cartContext)
  const {addToWishList} = useContext(wishlistContext)
  return (
    <div className="Products">
      <div className="container">
        <h2 className="h2">Products</h2>
        <div className="row g">
          {productsData.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="card shadow text-center">
                  <img className="card-img py-5 m-auto w-50" src={product.img} alt={product.title} />
                  <div className="card-body">
                    <b className="fs-3 title">{product.title}</b>
                    <div className="price d-flex align-items-center gap-2 justify-content-center">
                      <b>${product.price.toFixed(2)}</b>
                      <del className="text-muted">${product.sale.toFixed(2)}</del>
                    </div>
                    <div className="stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="icons">
                      <div className="icon radius-8" onClick={()=>addToWishList(product)}>
                        <FaHeart />
                      </div>
                      <div className="icon radius-8" onClick={()=>addToCart(product)}>
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

export default Products;
