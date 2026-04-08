import { MdClose, MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import logoSrc from "../../../assets/logo/white-logo-reeni (1).webp";
import manImage from "../../../assets/man (1).png";
import SocialIcons from "../SocialIcons";
import ContactInfo from "./ContactInfo";

/**
 * MobileSidebar Component
 * Handles the mobile menu that slides in from the right
 * Includes profile, contact info, and social links
 */
export default function MobileSidebar({
  isOpen,
  onClose,
  socialLinks,
}) {
  return (
    <>
      {/* Mobile Overlay - Closes menu when clicked */}
      <div
        className={`mobile-overlay ${isOpen ? "visible" : "hidden"}`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div
        className={`mobile-sidebar ${isOpen ? "visible" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Logo and Close Button */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={logoSrc} alt="Reeni logo" />
          </div>
          <button onClick={onClose} className="close-btn">
            <MdClose />
          </button>
        </div>

        {/* Main Content Section */}
        <div className="sidebar-content">
          {/* Profile Image */}
          <div className="profile-image">
            <img src={manImage} alt="Developer" />
          </div>

          {/* Profile Info */}
          <h3 className="profile-title">
            Freelancer delivering exceptional Webflow and Next.js solutions.
          </h3>
          <p className="profile-description">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>

          {/* Contact Information */}
          <ContactInfo
            icon={MdPhone}
            label="Call Now"
            value="+92 (8800) - 98670"
            href="+92880098670"
            type="phone"
          />
          <ContactInfo
            icon={IoMail}
            label="Mail Us"
            value="hassandev691@gmail.com"
            href="hassandev691@gmail.com"
            type="email"
          />
          <ContactInfo
            icon={FaLocationCrosshairs}
            label="Location"
            value="Karachi, Pakistan"
            href="#"
            type="link"
          />
        </div>

        {/* Divider */}
        <hr className="divider" />

        {/* Footer with Social Links */}
        <div className="sidebar-footer">
          <p className="footer-label">Find With Me</p>
          <SocialIcons socialLinks={socialLinks} variant="list" />
        </div>
      </div>
    </>
  );
}
