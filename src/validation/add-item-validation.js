import * as Yup from "yup";

export const additemSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  imgUrl: Yup.string()
    .url("Enter a valid image URL")
    .required("Image URL is required"),
});
