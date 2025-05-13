export default function ContactUsPage() {
  return (
    <main className="bg-[#FFF9EB] px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-4">Connect With Us</h1>
        <p className="text-2xl font-semibold text-black leading-relaxed">
          Each product is made with the finest ingredients to bring you the best
          experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="flex justify-center">
          {/* Outer arch frame */}
          <div className="bg-[#A68160] w-[483px] h-[682px] rounded-t-[255px] rounded-bl-[105px] px-10 pt-10 relative">
            {/* Inner arch cutout */}
            <div className="bg-[#FFF9EB] w-[420px] h-[652px] rounded-t-[265px] rounded-bl-[105px] absolute bottom-0 right-8"></div>
          </div>
        </div>



        {/* Contact Form Section */}
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
