import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useWishlist = () => {
  //--------wishlist-------//
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || [],
  );
  function addToWishList(product) {
    const isExist = wishList.find((item) => item.title === product.title);
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
      setWishList([...wishList, product]);
    }
  }
  function deleteWishList(product) {
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
        const newWishList = wishList.filter(
          (item) => item.title !== product.title,
        );
        setWishList(newWishList);
      }
    });
  }
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
  return { wishList, addToWishList, deleteWishList };
};
