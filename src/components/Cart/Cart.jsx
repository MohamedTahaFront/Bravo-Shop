import "./Cart.css";
import { RiDeleteBin5Line } from "react-icons/ri";

function Cart({ cart, deleteProduct, increment, decrement }) {

  const total = cart.reduce((sum , product)=> sum + (product.price * product.quantity) , 0 )

  return (
    <div className="Cart">
      <div className="container">
        {cart.length < 1 ? (
          <h2 className="text-danger empty h2">There are no products here</h2>
        ) : (
          <>
            <div className="row g">
              {cart.map((product, index) => {
                return (
                  <div className="col-lg-12" key={index}>
                    <div className="items shadow-sm">
                      <img
                        src={product.img || product.image || product.thumbnail}
                        alt=""
                      />
                      <div className="price">
                        <p className="m-0 fs-5">
                          Price : ${product.price.toFixed(2)}
                        </p>
                        <b className=" fs-5">
                          Total : ${" "}
                          {(product.price * product.quantity).toFixed(2)}
                        </b>
                      </div>
                      <div className="quantity_box">
                        <button
                          className="fs-5 btn btn-dark rounded-circle"
                          onClick={() => increment(product)}
                        >
                          +
                        </button>
                        <span className="fs-5">{product.quantity}</span>
                        <button
                          className="fs-5 btn btn-dark rounded-circle"
                          onClick={() => decrement(product)}
                        >
                          -
                        </button>
                      </div>
                      <RiDeleteBin5Line
                        onClick={() => deleteProduct(product)}
                        className="text-danger"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="fixed-box shadow-sm w-75 mx-auto">
              <span className="fs-3 fw-bold">Total Cart :</span>
              <span className="fs-3 fw-bold">${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
