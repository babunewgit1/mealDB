import React, { useEffect, useState } from "react";
import SignleFood from "../SingleFood/SignleFood";
import no from "../../assets/no.jpg";
import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Food = () => {
  const [inputValue, setInputValue] = useState("");
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((res) => res.json())
      .then((data) => setFoodData(data.meals));
  }, [inputValue]);

  const navigation = useNavigation();
  return (
    <div className="food bg-slate-400 py-16 px-6">
      {navigation.state === "loading" && <Loader></Loader>}
      <div className="searchitems w-1/2 mx-auto">
        <input
          className="bg-transparent border-2 w-full border-orange-400 rounded-full outline-none text-secondary text-xl font-semibold px-8 py-2 mb-14"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search with food name"
        />
      </div>

      {foodData ? (
        <div className="foodItems grid grid-cols-4 gap-6">
          {foodData.map((items) => (
            <SignleFood
              name={items.strIngredient1}
              items={items}
              key={items.idMeal}
            ></SignleFood>
          ))}
        </div>
      ) : (
        <div className="not">
          <img className="d-block w-1/2 mx-auto" src={no} alt="no data found" />
        </div>
      )}
    </div>
  );
};

export default Food;
