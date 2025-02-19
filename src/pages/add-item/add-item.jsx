import React from "react";
import { useFormik } from "formik";
import { additemSchema } from "@/validation/add-item-validation";

function AddItem() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: "",
    },
    validationSchema: additemSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Submitted values:", values);
      alert("Item Added Successfully!");
      resetForm();
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
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

        {/* Price Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Price:</label>
          <input
            type="number"
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

        {/* Image URL Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Image URL:
          </label>
          <input
            type="text"
            name="imgUrl"
            className="w-full border p-2 rounded mt-1"
            value={formik.values.imgUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.imgUrl && formik.errors.imgUrl && (
            <p className="text-red-500 text-sm">{formik.errors.imgUrl}</p>
          )}
        </div>

        {/* Submit Button */}
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
