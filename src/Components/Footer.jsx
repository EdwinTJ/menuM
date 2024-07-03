import React from "react";
import "../styles/Footer.css"; // Create this CSS file for styling
import facebook from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import tiktokIcon from "../assets/tiktok.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a
            href="https://www.facebook.com/profile.php?id=100090896380156"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/lamichoaknaonwheels23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@lamichoaknaonwheels?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokIcon} alt="TikTok" className="social-icon" />
          </a>
        </div>
        <p className="footer-text">Web created by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;
