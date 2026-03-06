import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/matsuri-logo.png" alt="Matsuri Logo" className="logo-image" />
          <div className="logo-text-wrap">
            <span className="logo-text">Matsuri</span>
            <span className="logo-subtext">@ UC San Diego</span>
          </div>
        </Link>
        <button
          type="button"
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-hamburger-line" />
          <span className="navbar-hamburger-line" />
          <span className="navbar-hamburger-line" />
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'navbar-menu-open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/schedule" className={isActive('/schedule') ? 'active' : ''} onClick={closeMenu}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/food" className={isActive('/food') ? 'active' : ''} onClick={closeMenu}>
              Food
            </Link>
          </li>
          <li>
            <Link to="/map" className={isActive('/map') ? 'active' : ''} onClick={closeMenu}>
              Map
            </Link>
          </li>
          <li>
            <Link to="/volunteer" className={isActive('/volunteer') ? 'active' : ''} onClick={closeMenu}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link to="/tickets" className={isActive('/tickets') ? 'active' : ''} onClick={closeMenu}>
              Tickets
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
