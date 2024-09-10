import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">MUNCHY</div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#recipes">Recipes</a>
        <a href="#workouts">Workouts</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <p>&copy; 2024 Munchy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;