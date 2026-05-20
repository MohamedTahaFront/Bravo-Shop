import "./Api.css";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

function Fakeproducts({
  fakeProducts,
  addToCart,
  addToWishList,
  loading,
  Error,
}) {
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
    <div className="Api">
      <div className="container">
        <h2 className="h2 text-center m-0">Fake Products</h2>
        <p className=" fs-5 text-center fw-bold w-75 mx-auto m-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint
          dicta provident corporis hic esse porro accusantium ullam. Consectetur
          id mollitia ipsa tenetur sequi exercitationem facere rem itaque error!
          Velit!
        </p>
        <div className="row g">
          {fakeProducts.map((product) => {
            return (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="card shadow text-center">
                  <img
                    className="card-img py-5 m-auto w-50"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <b className="fs-3 title">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </b>
                    <div className="icons">
                      <div
                        className="icon radius-8"
                        onClick={() => addToWishList(product)}
                      >
                        <FaHeart />
                      </div>
                      <Link
                        to={`product/${product.id}`}
                        className="btn btn-secondary"
                      >
                        View Details
                      </Link>
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

export default Fakeproducts;
