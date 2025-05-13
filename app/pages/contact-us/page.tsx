import ContactInfo from "@/app/components/organisms/contact-us-section/contact-details";
import ContactUsForm from "@/app/components/organisms/contact-us-section/contact-form";
import ContactHero from "@/app/components/organisms/contact-us-section/hero-section";

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactUsForm/>
    </>
  );
}
