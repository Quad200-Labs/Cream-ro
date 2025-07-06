"use client";

import Image from "next/image";
import { useFormik } from "formik";
import { useState } from "react";
import { ContactSchema } from "@/app/validations/validation-schemas";

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setSuccess(false);
      setError("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setSuccess(true);
          resetForm();
        } else {
          const result = await res.json();
          setError(result?.error || "Something went wrong.");
        }
      } catch (err) {
        console.error(err);
        setError("Network error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <main className="bg-[#FFF9EB] py-15 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-4 qurova-font">
          Connect With Us
        </h1>
        <p className="text-2xl font-semibold text-black leading-relaxed">
          Each product is made with the finest ingredients to bring you the best experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="w-full h-full bg-[#A68160] rounded-t-[265px] rounded-bl-[105px] p-8">
          <div className="bg-[#FFF9EB] w-full h-full rounded-t-[265px] rounded-bl-[105px] relative">
            <Image
              src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/contact-us-form-uSh9eFLK0eIDpTdeUNoZlTBv5YQZM9.svg"
              alt="Splash"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start sm:justify-end h-[682px]">
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {["name", "email", "phone", "location", "message"].map((field) => {
              const isTextArea = field === "message";
              const inputProps = {
                id: field,
                name: field,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values[field as keyof typeof formik.values],
                className:
                  "w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500",
              };

              return (
                <div key={field}>
                  {isTextArea ? (
                    <textarea {...inputProps} rows={6} placeholder="Message" />
                  ) : (
                    <input
                      {...inputProps}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={
                        field === "location"
                          ? "City/Location"
                          : field === "phone"
                          ? "Contact Number"
                          : field === "email"
                          ? "Email Address"
                          : "Name"
                      }
                    />
                  )}
                  {formik.touched[field as keyof typeof formik.touched] &&
                    formik.errors[field as keyof typeof formik.errors] && (
                      <p className="text-red-600 text-sm font-medium">
                        {formik.errors[field as keyof typeof formik.errors]}
                      </p>
                    )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A68160] text-white font-semibold py-3 rounded-xl hover:bg-yellow-600 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit your message"}
            </button>

            {success && (
              <p className="text-green-600 text-sm font-medium">
                Message sent successfully! 🎉
              </p>
            )}
            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}