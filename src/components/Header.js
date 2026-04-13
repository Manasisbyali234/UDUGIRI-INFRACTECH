import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={close}>
            <img src="/logo.jpg" alt="Udugiri Infratech" />
            <div className="logo-text">
              <span className="logo-name">Udugiri Infratech</span>
              <span className="logo-tagline">Survey · GIS · Engineering</span>
            </div>
          </Link>

          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>

          {isOpen && <div className="nav-overlay" onClick={close} />}
          <nav className={isOpen ? 'active' : ''}>
            <ul>
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'],
                ['/projects', 'Projects'], ['/careers', 'Careers'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={close}
                    className={isActive(path) ? 'nav-active' : ''}
                  >{label}</Link>
                </li>
              ))}
              <li className="nav-cta"><Link to="/enquiry" onClick={close}>Get Started ↗</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
