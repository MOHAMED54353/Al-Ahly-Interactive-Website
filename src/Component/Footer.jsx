import React from "react";
import "../Style/Footer.css";
import About from "./../Pages/About";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const Links = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/Team" },
    { name: "Trophies", path: "/about" },
    { name: "Legends", path: "#legends" },
  ];

  const socialLinks = [
    {
      icon: "https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png",
      name: "Facebook",
      url: "https://facebook.com/AlAhly",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/X_%28formerly_Twitter%29_logo_late_2025.svg",
      name: "Twitter",
      url: "https://twitter.com/AlAhly",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
      name: "Instagram",
      url: "https://instagram.com/alahlyschttps://www.instagram.com/alahly?igsh=ZWg4b3RnaWdteWhs",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
      name: "YouTube",
      url: "https://youtube.com/AlAhly",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/image.png" alt="Al Ahly Logo" />
            <h3>AL AHLY SC</h3>
          </div>
          <p className="footer-slogan">The Red Devils • Since 1907</p>
          <p className="footer-description">
            African Club of the Century. Champions on and off the field.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {Links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact">
            <p>
              <span className="contact-icon">🗺️</span>
              Al Ahly Club, Gezira, Cairo, Egypt
            </p>
            <p>
              <span className="contact-icon">📞</span>
              Call Center: 15515
            </p>
            <p>
              <span className="contact-icon">✉️</span>
              alahly1907@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>

          <p className="social-text">
            Join millions of Red Devils fans worldwide
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {currentYear} Al Ahly SC. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
