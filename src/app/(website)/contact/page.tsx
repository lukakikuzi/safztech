import ContactUsSection from "@/sections/home/contact-us-section";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  alternates: { canonical: "/contact" },
  title: "Contact SAFZTECH | Tell Us About Your Project",
  description:
    "Tell us about your website, app or growth project. Call, WhatsApp or send the form and we will reply within 24 hours.",
});

export default function ContactPage() {
  return (
    <main className="pt-24 lg:pt-28">
      <ContactUsSection />
    </main>
  );
}
