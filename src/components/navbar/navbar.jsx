import React from "react";
import { useCtx } from "@/context/state";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { cart } = useCtx();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 text-white py-3 px-6 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        RandomStore
      </h1>
      <div className="flex items-center space-x-4">
        {location.pathname != "/add-item" && (
          <Link to="/add-item" className="text-white">
            Add Item
          </Link>
        )}
        {location.pathname != "/items" && (
          <Link to="/items" className="text-white">
            Items
          </Link>
        )}
        <div className="relative" onClick={() => navigate("/checkout")}>
          <MdOutlineShoppingCart className="w-8 h-8 cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
