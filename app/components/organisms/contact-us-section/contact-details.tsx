import { contactData } from "@/app/constants";
import ContactItem from "../../molecules/contact-item";

export default function ContactInfo() {
  return (
    <div className="bg-[#FFF9EB] flex items-center justify-center min-h-screen sm:px-24 px-6 sm:py-15 py-15">
      <div className="rounded-lg flex flex-col lg:flex-row w-full gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-7">
          <div>
            {contactData.map((item, index) => (
              <ContactItem
                key={index}
                title={item.title}
                content={item.content}
                Icon={item.Icon}
              />
            ))}
          </div>
        </div>

        <div className="w-full aspect-square bg-[#a67c52] rounded-bl-[105px] rounded-t-[40px] p-5">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=6265+Brockport+Spencerport+Rd,+Brockport,+NY+14420&output=embed"
            className="w-full h-full rounded-bl-[81px] rounded-t-[25px]"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
