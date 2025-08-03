// src/components/Footer.jsx
import React from 'react';

const footerStyle = {
  padding: '1.5rem',
  backgroundColor: '#2c3e50',
  color: 'white',
  textAlign: 'center',
  fontSize: '0.9rem',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 EventManager – Built for Mumbai Colleges</p>
      <p>Contact: support@eventmanager.in</p>
    </footer>
  );
};

export default Footer;
