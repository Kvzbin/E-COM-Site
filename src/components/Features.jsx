import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { CgProfile } from "react-icons/cg";

function Features() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { showSearch, setShowSearch } = useSearch();

  const handleCartClick = () => navigate("/cart");

  return (
    <div className="flex gap-5 items-center">
      <div
        onClick={() => setShowSearch(!showSearch)}
        className="cursor-pointer"
      >
        <Link to="/collection">
          <FiSearch size="1.4em" />
        </Link>
      </div>

      <div
        className="font-semibold cursor-pointer"
        onClick={() => navigate("/login")}
      >
        <CgProfile  size="1.4em" />
      </div>

      <div onClick={handleCartClick} className="cursor-pointer relative">
        <RiShoppingBag4Line size="1.4em" />
        {cart.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
