import React from 'react';

const NavBar = () => {
  return (
    <header>
        <h1 className="logo"><a href="#home" className="no-link-style">MUNCHY</a></h1>      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
      <div className="header-buttons">
        <button className="about-button">About us</button>
        <button className="waitlist-button">Join Waitlist</button>
      </div>
    </header>
  );
};

export default NavBar;