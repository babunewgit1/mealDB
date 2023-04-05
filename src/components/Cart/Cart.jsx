import React, { useContext } from "react";
import { CartContext, MyCatagory } from "../../Layout/Main";

const Cart = () => {
  const cartDetals = useContext(CartContext);
  const mainData = useContext(MyCatagory);

  let mathchedProduct = [];
  for (let items of cartDetals.cart) {
    const findProduct = mainData.find((pd) => pd.idMeal === items);
    if (findProduct) {
      mathchedProduct.push(findProduct);
    }
  }

  console.log(mathchedProduct);

  return (
    <div className="cart-wrapper bg-gray-400 text-secondary p-14">
      <div className="cartbox">
        {mathchedProduct.map((item, index) => {
          return (
            <div
              key={index}
              className="cartOption flex items-center gap-7 p-4 rounded-md bg-white shadow-lg mt-5"
            >
              <div className="cartImages">
                <img
                  className="block w-[150px] h-[150px]"
                  src={item.strMealThumb}
                  alt=""
                />
              </div>
              <div className="cartDetails">
                <h2 className="text-2xl font-bold">{item.strIngredient1}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
