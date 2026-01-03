import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919873378500"; // with country code, no + or spaces
const MESSAGE =
  "Hello Masala Essence, I’d like to inquire about your services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-1 z-50 flex items-center gap-2 bg-gray-500 text-white px-2 py-1 md:px-4 md:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline font-medium">Chat with us</span>
    </a>
  );
}
