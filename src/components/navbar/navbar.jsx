import React from "react";
import { useCtx } from "@/context/state";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cart } = useCtx();
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 text-white py-3 px-6 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        RandoStore
      </h1>
      <div className="relative" onClick={() => navigate("/checkout")}>
        <MdOutlineShoppingCart className="w-8 h-8 cursor-pointer" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
