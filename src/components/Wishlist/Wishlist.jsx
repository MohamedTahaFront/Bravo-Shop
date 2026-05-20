import "./Wishlist.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Wishlist({ wishList, addToCart, deleteWishList }) {
  return (
    <div className="Wishlist">
      <div className="container">
        {wishList.length < 1 ? (
          <h2 className="text-danger empty h2 ">There are no products here</h2>
        ) : (
          <div className="row g">
            {wishList.map((product, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card shadow text-center">
                    <img
                      className="card-img py-5 m-auto w-50"
                      src={product?.img || product?.image || product?.thumbnail}
                      alt={product?.title}
                    />
                    <div className="card-body">
                      <b className="fs-3 title">{product?.title}</b>
                      <p className="m-0 fw-bold fs-5">
                        price : ${product?.price.toFixed(2)}
                      </p>
                      <div className="icons">
                        <div
                          className="icon radius-8"
                          onClick={() => addToCart(product)}
                        >
                          <FaShoppingCart />
                        </div>
                        <div className="icon radius-8 bg-danger" onClick={()=>deleteWishList(product)}>
                          <IoMdClose />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
