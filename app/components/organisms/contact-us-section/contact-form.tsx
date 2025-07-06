import Image from "next/image";

export default function ContactUsForm() {
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
        <div className="w-full h-full bg-[#A68160] rounded-t-[265px] rounded-bl-[105px]  p-8">
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

        <div className="flex flex-col justify-end h-[682px]">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="text"
              placeholder="City/Location"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#A68160] text-white font-semibold py-3 rounded-xl hover:bg-yellow-600 transition"
            >
              Submit your inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
