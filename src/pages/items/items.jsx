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
    <div className="grid grid-cols-3 gap-4 p-4">
      {items?.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-lg">
          <img
            className="w-full h-40 object-cover"
            src={`http://localhost:3000/img/${item.img.replace("./img/", "")}`}
            alt={item.name}
          />
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-600">${item.price}</p>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;
