import React from "react";
import { itemsService } from "@/services/items";
import { useAsync } from "@/hooks/useAsync";
import { useCtx } from "@/context/state";

function Items() {
  const { value: items, loading } = useAsync(itemsService.getAllItems);
  const { dispatch } = useCtx();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Items for Sale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items?.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition"
          >
            <img
              src={`http://localhost:3000/img/${item.img.replace(
                "./img/",
                ""
              )}`}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-700 text-sm mb-2">${item.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
