import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Social Media */}
        <div className="footer-social">
          <a
            href="https://www.instagram.com/mkai_karateindia?igsh=b2xwZ2d0YzJqNWx3&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@mkai_karateindia?si=6ewzWHAehaimNqUW"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/share/17sfeJRFT3/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbBfQAAFnSz85tomSt0U"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Center Section - Text */}
        <div className="footer-text">
          <p className="footer-anniversary">
            Marking 15 Years of Outstanding Contribution to Karate
          </p>
          <p>© 2026 TEAM MKAI KARATE | All Rights Reserved</p>
          <p className="footer-credit">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/muthukumarb2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Muthukumar. B
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
