import { FaWhatsapp } from "react-icons/fa"; // Using react-icons for WhatsApp icon
import Link from "next/link";

export default function WhatsappFloatingLink() {
  return (
    <Link
      href="https://wa.me/+5516996518815" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 zoom-in delay-300 duration-300 animate-in bg-green-500 text-white p-4 rounded-full shadow-lg drop-shadow-md focus:bg-green-600 hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}