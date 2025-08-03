// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#2c3e50',
  color: 'white',
};

const linkStyle = {
  margin: '0.5rem',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem' }}>EventManager</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/upcoming" style={linkStyle}>Upcoming</Link>
        <Link to="/past" style={linkStyle}>Past</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
