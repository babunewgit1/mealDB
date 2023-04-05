import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyCatagory } from "../../Layout/Main";

const Sidebar = () => {
  const cataValue = useContext(MyCatagory);

  const uiqueCata = [];
  for (let item of cataValue) {
    if (!uiqueCata.includes(item.strCategory)) {
      uiqueCata.push(item.strCategory);
    }
  }

  return (
    <section id="sidebar" className="bg-zinc-700 h-full px-5 py-12 text-white">
      <div className="sidebarWrapper">
        <h2 className="text-3xl font-bold text-secondary text-center">
          Find Your Food By Catagory
        </h2>
        <div className="catagory mt-9 text-xl font-semibold">
          <ul className="space-y-3">
            {uiqueCata.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/cata/${item}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
