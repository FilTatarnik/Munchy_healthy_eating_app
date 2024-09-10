import React, { useState, useEffect, useRef } from 'react';

const NavBar = ({ toggleAboutUs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <h1 className="logo"><a href="#home" className="no-link-style">MUNCHY</a></h1>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav ref={navRef} className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#recipes" onClick={toggleMenu}>Recipes</a>
        <a href="#workouts" onClick={toggleMenu}>Workouts</a>
        <a href="#about" onClick={toggleMenu}>About us</a>
      </nav>
    </header>
  );
};

export default NavBar;