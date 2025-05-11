"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-4 py-2 rounded-full text-[#505050] font-semibold bg-[#FFF9EB] focus:outline-none focus:ring-2 focus:ring-[#A68160] flex-1 min-w-72 sm:min-w-md"
        required
      />
      <motion.button
        type="submit"
        className="px-3 py-2 rounded-full bg-[#A68160] text-[#FFECD4] font-medium hover:bg-[#8B6B4F] transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Subscribe
      </motion.button>
    </form>
  );
}
