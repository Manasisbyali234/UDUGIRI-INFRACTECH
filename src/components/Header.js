import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setScrolled(false); // Reset scrolled state if not on home
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <header className={`${scrolled || !isHome ? 'scrolled' : ''}`}>
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
