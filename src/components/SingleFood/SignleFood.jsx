import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Layout/Main";
import { toast } from "react-toastify";

const SignleFood = ({ items, name }) => {
  const { strMealThumb, idMeal } = items;

  const navigate = useNavigate();
  const viewDetails = (id) => {
    navigate(`/food/${id}`);
  };

  const cartValue = useContext(CartContext);
  const addCart = (id) => {
    const finded = cartValue.cart.find((item) => item === id);
    if (finded) {
      toast("Already Added");
      return;
    } else {
      cartValue.setCart([...cartValue.cart, id]);
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body p-3 py-5">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-between">
          <button onClick={() => addCart(idMeal)} className="btn btn-primary">
            Add to Cart
          </button>
          <button
            onClick={() => viewDetails(idMeal)}
            className="btn btn-secondary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignleFood;
