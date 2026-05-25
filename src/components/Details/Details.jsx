import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { cartContext } from "../../context/CartContect";

function Details() {
  const {addToCart} = useContext(cartContext)

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        if (location.pathname.includes("fackapi")) {
          let { data } = await axios.get(
            `https://fakestoreapi.com/products/${id}`,
          );
          setProduct(data);
        } else if (location.pathname.includes("dummyapi")) {
          let { data } = await axios.get(
            `https://dummyjson.com/products/${id}`,
          );
          setProduct(data);
        }
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id, location]);
// ------------------- Loading , error -----------------------//
  if (loading)
    return (
      <div className="full">
        <PulseLoader color="#cece2b" />
      </div>
    );
  if (!product)
    return (
      <div className="full">
        <d className="h2">
          This product does not exist! The product number you are looking for is
          not registered in the database.
        </d>
      </div>
    );
// ------------------------------------------------------------//
  return (
    <div className="Details">
      <div className="container">
        <div className="box shadow-sm">
          <div className="image">
            <img
              src={product?.image || product?.thumbnail}
              alt={product?.title}
            />
          </div>
          <div className="info">
            <b className="h2">( {product?.category} ) </b>
            <p className="m-0 fs-3 fw-bold">Product Name : {product?.title}</p>
            <div className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
            <p className="fs-4 m-0">{product?.description}</p>
            <b className="fs-3"> Price : ${product?.price} </b>
            <div className="btns">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <FaShoppingCart /> Add to cart
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
