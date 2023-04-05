import React from "react";
import { useLoaderData } from "react-router-dom";
import SignleFood from "../SingleFood/SignleFood";

const Catagory = () => {
  const foodData = useLoaderData().meals;
  console.log(foodData);
  return (
    <div className="cataData grid grid-cols-4 gap-6 p-8">
      {foodData.map((items) => {
        return (
          <SignleFood
            name={items.strMeal}
            items={items}
            key={items.idMeal}
          ></SignleFood>
        );
      })}
    </div>
  );
};

export default Catagory;
