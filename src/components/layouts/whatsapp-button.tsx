import { FaWhatsapp } from "react-icons/fa";

const PHONE = "14196012734";
const MESSAGE = encodeURIComponent(
  "Hi SAFZTECH! I visited your website and I'm interested in your services. Can we talk?"
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}
