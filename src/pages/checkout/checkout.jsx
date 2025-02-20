import React from "react";
import { useCtx } from "@/context/state";

function Checkout() {
  const { cart } = useCtx();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={`${
                  import.meta.env.VITE_REACT_APP_SERVER_BASE_URL
                }/img/${item.img.replace("./img/", "")}`}
                alt={item.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
