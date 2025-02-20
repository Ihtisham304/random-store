import React from "react";
import { useFormik } from "formik";
import { additemSchema } from "@/validation/add-item-validation";
import { useAsyncFn } from "@/hooks/useAsync";
import { itemsService } from "@/services/items";
import { use } from "react";
function AddItem() {
  const { execute } = useAsyncFn(itemsService.addItem);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      img: "",
    },
    validationSchema: additemSchema,
    onSubmit: async (values, { resetForm }) => {
      // try {
      //   const response = await fetch("http://localhost:3000/items", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(values),
      //   });
      //   const data = await response.json();
      //   console.log("Item added successfully:", data);
      //   resetForm();
      // } catch (error) {
      //   console.error("Error adding item:", error.message);
      // }
      const datTosend = JSON.stringify(values);
      console.log("data to send", datTosend);
      execute(datTosend)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("Error adding item:", error);
        });
      resetForm();
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded mt-1"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Price:</label>
          <input
            type="text"
            name="price"
            className="w-full border p-2 rounded mt-1"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm">{formik.errors.price}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Image URL:
          </label>
          <input
            type="text"
            name="img"
            className="w-full border p-2 rounded mt-1"
            value={formik.values.img}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.img && formik.errors.img && (
            <p className="text-red-500 text-sm">{formik.errors.img}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
