import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight, MdClose, MdPhone, } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter, } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./pages/logo/Logo";
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
                  <Link to="/service-details" className="dropdown-item-link">
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
                  <Link to="/blog-details" className="dropdown-item-link">
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
                  <Link to="/project-details" className="dropdown-item-link">
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
                  <Icon size={16} />
                </Link>
              ),
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="hamburger-btn"
          >
            <CiMenuFries className="hamburger-icon" />
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
            <p className="contact-label">Call Now</p>
            <a href="tel:+92880098670" className="contact-link">
              <div className="contact-icon">
                <MdPhone />
              </div>
              <span>+92 (8800) - 98670</span>
            </a>
          </div>
        </div>

        <hr className="divider" />

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            <li>
              <Link to="/" onClick={closeMenu} className="sidebar-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="sidebar-nav-link"
              >
                About
              </Link>
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`mobile-dropdown-btn ${
                  isMobileServicesOpen ? "active" : ""
                }`}
              >
                Services
                <MdOutlineKeyboardArrowDown
                  className={`mobile-dropdown-arrow ${
                    isMobileServicesOpen ? "open" : ""
                  }`}
                />
              </button>

              <div
                className={`mobile-dropdown-menu ${
                  isMobileServicesOpen ? "visible" : "hidden"
                }`}
              >
                <ul className="mobile-dropdown-list">
                  <li>
                    <Link
                      to="/services"
                      onClick={closeMenu}
                      className="mobile-dropdown-link"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/uiux"
                      onClick={closeMenu}
                      className="mobile-dropdown-link"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/details"
                      onClick={closeMenu}
                      className="mobile-dropdown-link"
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/project"
                onClick={closeMenu}
                className="sidebar-nav-link"
              >
                Project
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="sidebar-nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

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
  );
}
