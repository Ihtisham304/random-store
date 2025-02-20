import * as Yup from "yup";

export const additemSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  price: Yup.number()
    .typeError("Price must be a valid number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  img: Yup.string().required("Image URL is required"),
});
