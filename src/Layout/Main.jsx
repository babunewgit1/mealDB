import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { createContext } from "react";
export const MyCatagory = createContext();
export const CartContext = createContext();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const data = useLoaderData().meals;
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <CartContext.Provider value={{ setCart, cart }}>
      <MyCatagory.Provider value={data}>
        <div className="mainContent">
          <div className="mainwrapper grid grid-cols-12">
            <div className="mainleft col-span-2">
              <Sidebar></Sidebar>
            </div>
            <div className="mainright col-span-10">
              <Header></Header>
              <Outlet></Outlet>
            </div>
          </div>
          <Footer></Footer>
          <ToastContainer />
        </div>
      </MyCatagory.Provider>
    </CartContext.Provider>
  );
};

export default Main;
