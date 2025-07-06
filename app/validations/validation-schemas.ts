import * as Yup from "yup";

export const ContactSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10,}$/, "Contact number must be at least 10 digits")
      .required("Contact number is required"),
    location: Yup.string(),
    message: Yup.string()
      .test("wordCount", "Message must be at least 50 words", (value) => {
        if (!value) return false;
        return value.trim().split(/\s+/).length >= 50;
      })
      .required("Message is required"),
  });