import React from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="py-7 shadow px-5">
      <div className="headerWrapper flex items-center justify-between">
        <div className="logo flex items-center justify-between">
          <Link className="text-secondary text-3xl font-bold" to="/">
            Meal DB
          </Link>
          <span className="block lg:hidden">
            <Bars3Icon className="w-7 h-7 text-secondary"></Bars3Icon>
          </span>
        </div>
        <div className="navBar">
          <ul className="flex font-semibold text-xl text-primary gap-7">
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
