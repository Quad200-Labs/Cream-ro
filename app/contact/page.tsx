export default function ContactUsPage() {
  return (
    <main className="bg-[#FFF9EB] px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Connect With Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Each product is made with the finest ingredients
          to bring you the best experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
       
        <div className="h-full flex justify-center">
          {/* Outer Arch Track - now includes bottom-left curve */}
          <div className="bg-[#A68160] w-full h-full max-w-sm rounded-t-full rounded-bl-full flex items-center justify-center p-10 relative">
            {/* Inner Field Area */}
            <div className="bg-[#FFF9EB] w-full max-w-xs h-full max-h-105 rounded-t-full rounded-bl-full flex items-center justify-center shadow-lg absolute bottom-0">
              {/* <img
                src="/contact-icecream.jpg"
                alt="Contact CreamRo"
                className="w-full h-auto rounded-xl"
              /> */}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-xl border border-[#A6816080] text-black bg-transparent placeholder:text-[#A68160]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Email"
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
              rows={4}
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
