import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">MUNCHY</div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Privacy Notice</a>
          <a href="#">Imprint</a>
        </div>
        <button className="waitlist-button">Join Waitlist</button>
      </div>
    </footer>
  );
};

export default Footer;