import { object, string } from "yup";

export const checkoutValidation = object({
  name: string()
    .required("Requred")
    .matches(/\b\w+\s+\w+\b/, `Name must have first name and last name`)
    .matches(/\b[a-zA-Z]+\s+[a-zA-Z]+\b/, `Name should not contains numbers`)
    .matches(
      /^[a-zA-Z\s]+$/,
      "Name must be includes english characters only and valid"
    ),

  phone: string()
    .required("Required*")
    .matches(/^\d+$/, "Phone must be digits only")
    .min(11, "Phone must be 11 digits")
    .max(11, "Phone must be 11 digits"),
  email: string()
    .email(() => `Invalid Email`)
    .required("Required*"),
});
