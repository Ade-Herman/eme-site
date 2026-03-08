/**
 * WhatsAppButton Component
 * Floating Action Button (FAB) for WhatsApp inquiries
 * Fixed to bottom-right of screen
 */
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage =
    "Hello, I would like more information about your English courses.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <span className="whatsapp-icon">
        <FaWhatsapp />
      </span>
    </a>
  );
}

export default WhatsAppButton;
