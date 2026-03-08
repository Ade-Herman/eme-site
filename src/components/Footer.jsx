/**
 * Footer Component
 * Footer section with brand, links, and contact information
 */
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <h2>EME</h2>
            <p>
              Empowering you to master English with confidence, from essential
              grammar to fluent conversation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#programs">Our Programs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="footer-contact-item">
              <FaPhone />
              <span>+62 123 4567 890</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <span>hello@eme-course.com</span>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Depok, Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright Bar */}
        <div className="footer-copyright">
          © 2026 EME English Course. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
