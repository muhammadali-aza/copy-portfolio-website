import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight, MdClose, MdPhone, } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter, } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Logo from "./pages/logo/Logo";
import { IoMail } from "react-icons/io5";
import logoSrc from "../assets/logo/white-logo-reeni (1).webp";
import manImage from "../assets/man (1).png";
import "./Navbarlink.css";

export default function NavbarLink() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    blog: false,
    project: false,
  });
 
  // Scroll Handler - Shadow after 10px
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown Handlers
  const handleMouseEnter = (key) =>
    setDropdowns((prev) => ({ ...prev, [key]: true }));
  const handleMouseLeave = (key) =>
    setDropdowns((prev) => ({ ...prev, [key]: false }));

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <div className="nav-bg-img">
    <div className={`navbar ${scrollPosition > 10 ? "shadow" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="dropdown-item"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <div
                className={`dropdown-label ${
                  dropdowns.services ? "active" : ""
                }`}
              >
                Services
                <MdOutlineKeyboardArrowDown
                  className={`dropdown-arrow ${
                    dropdowns.services ? "open" : ""
                  }`}
                />
              </div>

              <ul
                className={`dropdown-menu ${
                  dropdowns.services ? "visible" : "hidden"
                }`}
              >
                <li>
                  <Link to="/services" className="dropdown-item-link">
                    Services
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/services-details" className="dropdown-item-link">
                    Service Details
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li
              className="dropdown-item"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")}
            >
              <div
                className={`dropdown-label ${dropdowns.blog ? "active" : ""}`}
              >
                Blog
                <MdOutlineKeyboardArrowDown
                  className={`dropdown-arrow ${dropdowns.blog ? "open" : ""}`}
                />
              </div>

              <ul
                className={`dropdown-menu ${
                  dropdowns.blog ? "visible" : "hidden"
                }`}
              >
                <li>
                  <Link to="/blog" className="dropdown-item-link">
                    Blog Classic
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog/blogdetails" className="dropdown-item-link">
                    Blog Details
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
              </ul>
            </li>

            {/* Project Dropdown */}
            <li
              className="dropdown-item"
              onMouseEnter={() => handleMouseEnter("project")}
              onMouseLeave={() => handleMouseLeave("project")}
            >
              <div
                className={`dropdown-label ${
                  dropdowns.project ? "active" : ""
                }`}
              >
                Project
                <MdOutlineKeyboardArrowDown
                  className={`dropdown-arrow ${
                    dropdowns.project ? "open" : ""
                  }`}
                />
              </div>

              <ul
                className={`dropdown-menu ${
                  dropdowns.project ? "visible" : "hidden"
                }`}
              >
                <li>
                  <Link to="/project" className="dropdown-item-link">
                    Projects
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/project/projectdetails" className="dropdown-item-link">
                    Project Details
                    <MdKeyboardArrowRight className="dropdown-arrow-icon" />
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="right-side">
          {/* Social Icons */}
          <div className="social-icons">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
              (Icon, index) => (
                <Link key={index} className="social-icon">
                  <Icon className="navbar-social-icon" />
                </Link>
              ),
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="hamburger-btn"
          >
            <RiMenu3Fill className="hamburger-icon" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "visible" : "hidden"}`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar ${isMobileMenuOpen ? "visible" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={logoSrc} alt="Reeni logo" />
          </div>
          <button onClick={closeMenu} className="close-btn">
            <MdClose />
          </button>
        </div>

        {/* Content */}
        <div className="sidebar-content">
          <div className="profile-image">
            <img src={manImage} alt="Developer" />
          </div>
          <h3 className="profile-title">
            Freelancer delivering exceptional Webflow and Next.js solutions.
          </h3>
          <p className="profile-description">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>

          {/* Contact */}
          <div className="contact-section">
            <div className="contact-icon-box">
              <MdPhone />
            </div>
            <div className="contact-details">
              <p className="contact-label">Call Now</p>
              <a href="tel:+92880098670" className="contact-value">
                +92 (8800) - 98670
              </a>
            </div>

            
          </div>
            <div className="contact-section">
            <div className="contact-icon-box">
            <IoMail />
            </div>
            <div className="contact-details">
              <p className="contact-label">Mail Us</p>
              <a href="#" className="contact-value">
              hassandev691@gmail.com
              </a>
            </div>

            
          </div>

           <div className="contact-section">
            <div className="contact-icon-box">
            <FaLocationCrosshairs />
            </div>
            <div className="contact-details">
              <p className="contact-label">Location</p>
              <a href="#" className="contact-value">
              Karachi, Pakistan
              </a>
            </div>

            
          </div>
        </div>

        <hr className="divider" />

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="footer-label">Find With Me</p>
          <ul className="footer-social-list">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
              (Icon, i) => (
                <li key={i}>
                  <Link className="footer-social-link">
                    <Icon size={18} />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
