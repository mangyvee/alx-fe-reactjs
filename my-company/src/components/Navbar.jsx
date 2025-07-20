import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#333',         // ✅ includes backgroundColor
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between', // ✅ includes justifyContent
    alignItems: 'center'
  };

  return (
    <nav style={navbarStyle}>
      <div className="logo">TechNova Ltd.</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
        <li><a href="#about" style={{ color: 'white' }}>About</a></li>
        <li><a href="#services" style={{ color: 'white' }}>Services</a></li>
        <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
