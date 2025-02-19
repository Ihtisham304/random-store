import React from "react";
import { useCtx } from "@/context/state";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  const { state } = useCtx();

  return (
    <nav className="bg-gray-900 text-white py-3 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">RandoStore</h1>
      <div className="relative">
        <MdOutlineShoppingCart className="w-8 h-8 cursor-pointer" />
        {state.count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {state.count}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
