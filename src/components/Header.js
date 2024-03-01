import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  // Subscribing to the store using Selector
  const cart = useSelector((store) => store.cart);
  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-20" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cart.items.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
