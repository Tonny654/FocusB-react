import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🐶 FocusBoost</Link>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link to="/timer">Timer</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <FaBars className="burger" onClick={() => setOpen(!open)} />
    </nav>
  );
}

export default Navbar;
