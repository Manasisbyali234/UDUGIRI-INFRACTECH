import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.jpg" alt="Udugiri Infratech" />
          </div>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={isOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link></li>
              <li><Link to="/enquiry" onClick={() => setIsOpen(false)}>Enquiry</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
