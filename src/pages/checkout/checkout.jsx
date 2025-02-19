import React from "react";
import { useCtx } from "@/context/state";

function Checkout() {
  const { cart, setCart } = useCtx();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <img
                className="w-full h-40 object-cover"
                src={`http://localhost:3000/img/${item.img.replace(
                  "./img/",
                  ""
                )}`}
                alt={item.name}
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
