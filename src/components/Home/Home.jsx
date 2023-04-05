import React from "react";
import img1 from "../../assets/1.jpg";
import { useLoaderData, useNavigation } from "react-router-dom";
import Carusol from "../Carusol/Carusol";
import Loader from "../Loader/Loader";

const Home = () => {
  const homeData = useLoaderData().meals;
  const arr = [];
  for (let i = 0; i <= 5; i++) {
    const random = Math.round(Math.random() * (homeData.length - 1));
    arr.push(homeData[random]);
  }

  const catagory = [];
  for (let cata of homeData) {
    if (!catagory.includes(cata.strCategory)) {
      catagory.push(cata.strCategory);
    }
  }

  const navigation = useNavigation();

  return (
    <div className="homePage">
      {navigation.state === "loading" && <Loader></Loader>}
      <div id="hero" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[600px] object-cover" />
        <div className="FoodContant flex bg-black bg-opacity-70 absolute inset-0 text-center text-white items-center justify-center">
          <div className="sbaburContent space-y-5">
            <h2 className="text-4xl text-secondary font-bold">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing amet
              consectetur adipisicing <br />
              elit. Facilis adipisci reprehenderit qui nisi similique,ehenderit
              qui nisi similique,
            </p>
            <button className="btn btn-secondary">Explore More</button>
          </div>
        </div>
      </div>
      <div className="homesbabur px-6 py-16">
        <div className="popular mb-8">
          <h2 className="text-4xl text-secondary font-bold border-b-2 border-secondary pb-5">
            Our Popular Items
          </h2>
        </div>
        <Carusol data={arr}></Carusol>
      </div>
    </div>
  );
};

export default Home;
