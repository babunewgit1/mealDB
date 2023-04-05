import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../Layout/Main";
import { toast } from "react-toastify";

const Details = () => {
  const detailsData = useLoaderData();
  const cartValue = useContext(CartContext);

  const addCart = (id) => {
    const finded = cartValue.cart.find((item) => item === id);
    if (finded) {
      toast("Already added");
      return;
    } else {
      cartValue.setCart([...cartValue.cart, id]);
    }
  };
  return (
    <div className="foodDetails bg-slate-500 p-6">
      <div className="foodDetailsWrapper grid grid-cols-2">
        <div className="foodLeft">
          <img
            className="block w-full"
            src={detailsData.meals[0].strMealThumb}
            alt=""
          />
        </div>
        <div className="foodRight text-center flex items-center justify-center">
          <button
            onClick={() => addCart(detailsData.meals[0].idMeal)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
