import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-200 ">
      <div>
        <Link to={"/"} className="text-xl font-bold">
          Logo
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <NavLink to={"/basket"} className="flex text-2xl font-semibold">
          <TiShoppingCart />
          <sup className="text-xs px-2 flex items-center justify-center text-white rounded-full bg-blue-600">
            {basket.length}
          </sup>
        </NavLink>

        <NavLink to={"/"} className="text-base font-semibold">
          Home
        </NavLink>
        <NavLink to={"/cars"} className="text-base font-semibold">
          Cars
        </NavLink>

        <NavLink to={"/login"} className="text-base font-semibold">
          <button className="py-1 px-3 rounded-md bg-gray-400 text-white">
            Log in
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
