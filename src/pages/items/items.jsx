import React from "react";
import { itemsService } from "@/services/items";
import { useAsync } from "@/hooks/useAsync";
import { useCtx } from "@/context/state";

function Items() {
  const { cart, setCart } = useCtx();
  const { value: items, loading } = useAsync(itemsService.getAllItems);

  const addToCart = (item) => {
    setCart((prev) => {
      const updatedCart = [...prev, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="grid grid-cols-3 gap-8 p-4">
      {items?.map((item) => (
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
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
