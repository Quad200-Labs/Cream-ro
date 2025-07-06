"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, location, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setMessage("");
      } else {
        const result = await res.json();
        const errorMessage =
          typeof result?.error === "string"
            ? result.error
            : result?.error?.message || "Something went wrong.";
        setError(errorMessage);
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#FFF9EB] py-15 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-4 qurova-font">
          Connect With Us
        </h1>
        <p className="text-2xl font-semibold text-black leading-relaxed">
          Each product is made with the finest ingredients to bring you the best
          experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Image Side */}
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

        {/* Form Side */}
        <div className="flex flex-col justify-start sm:justify-end h-[682px]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="text"
              placeholder="City/Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A68160] text-white font-semibold py-3 rounded-xl hover:bg-yellow-600 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit your inquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-sm font-medium">
                Message sent successfully! 🎉
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
