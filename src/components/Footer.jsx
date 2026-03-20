/**
 * Footer Component
 * Footer section with brand, links, and contact information
 */
import { Link } from "react-scroll";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
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
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="programs"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ cursor: "pointer" }}
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
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
