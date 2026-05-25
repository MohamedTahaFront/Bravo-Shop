import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useCart = () => {
  //-------cart--------//
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return { cart, addToCart, deleteProduct, increment, decrement };
};
