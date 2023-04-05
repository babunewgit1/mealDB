import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Carusol = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  const navigator = useNavigate();
  const seeDetails = (id) => {
    navigator(`/food/${id}`);
  };
  return (
    <Slider {...settings}>
      {data.map((items) => {
        return (
          <div className="slideContant text-center" key={items.idMeal}>
            <img className="" src={items.strMealThumb} alt="meal images" />
            <h2 className="text-2xl font-bold mt-4">{items.strIngredient1}</h2>
            <button
              onClick={() => seeDetails(items.idMeal)}
              className="btn btn-secondary mt-3"
            >
              See Details
            </button>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carusol;
