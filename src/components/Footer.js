import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/logo.jpg" alt="Udugiri Infratech" className="footer-logo" />
            <h3>Udugiri Infratech</h3>
            <p>Delivering excellence in infrastructure and technology solutions with precision and innovation.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: udugiriengineer@gmail.com</p>
            <p>Phone: 78992 13066</p>
            <p>Address: [Your Address]</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Udugiri Infratech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
