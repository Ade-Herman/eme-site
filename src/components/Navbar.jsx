import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import emeLogoBold from "../assets/eme-logo.png";
import emeScript from "../assets/eme-script.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="home"
          className="logo-container"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img src={emeLogoBold} alt="EME Bold Logo" className="logo-bold" />
          <img src={emeScript} alt="EME Script Logo" className="logo-script" />
        </Link>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="navbar-icon" />
          ) : (
            <FaBars className="navbar-icon" />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <Link
              to="home"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="navbar-dropdown">
          <ul className="navbar-menu-mobile">
            <li>
              <Link
                to="home"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
