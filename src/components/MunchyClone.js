import React, { useState, useEffect } from 'react';
import './MunchyClone.css';

const MunchyClone = () => {
  const [boost, setBoost] = useState('');

  const handleBoost = () => {
    console.log('Boosted:', boost);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'testimonials'];
      const navLinks = document.querySelectorAll('.navbar a');

      let currentSectionId = sections[0];

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section.offsetTop <= window.scrollY + 100) {
          currentSectionId = sectionId;
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute('href').slice(1) === currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="munchy-clone">
      <header>
        <h1 className="logo">MUNCHY</h1>
        <nav className="navbar">
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
          <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
        </nav>
        <div className="header-buttons">
          <button className="about-button">About us</button>
          <button className="waitlist-button">Join Waitlist</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <h2 className="main-title">Get addicted to healthy habits</h2>
          <div className="boost-input">
            <input
              type="text"
              value={boost}
              onChange={(e) => setBoost(e.target.value)}
              placeholder="Enter boost code"
            />
            <button onClick={handleBoost}>Boost</button>
          </div>
          <p className="boost-description">
            Boost your way to our Beta waitlist and build Munchy with us 😻
          </p>
        </section>

        <div className="full-width-image">
          <img src="/api/placeholder/1920/600" alt="Healthy lifestyle" />
        </div>

        <section id="features" className="features">
          <h2>Why Choose Munchy?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Track Your Progress</h3>
              <p>Monitor your healthy habits and see your improvements over time.</p>
            </div>
            <div className="feature-item">
              <h3>Community Support</h3>
              <p>Connect with like-minded individuals and share your journey.</p>
            </div>
            <div className="feature-item">
              <h3>Personalized Goals</h3>
              <p>Set and achieve custom health goals tailored to your needs.</p>
            </div>
            <div className="feature-item">
              <h3>Expert Guidance</h3>
              <p>Access tips and advice from nutrition and fitness professionals.</p>
            </div>
          </div>
        </section>

        <div className="full-width-image">
          <img src="/api/placeholder/1920/600" alt="Healthy food" />
        </div>

        <section id="testimonials" className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p>"Munchy has completely transformed my approach to healthy living!"</p>
              <span>- Sarah K.</span>
            </div>
            <div className="testimonial-item">
              <p>"I've never felt better since I started using Munchy to track my habits."</p>
              <span>- Mike R.</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">MUNCHY</div>
        <div className="footer-links">
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
          <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Notice</a>
            <a href="#">Imprint</a>
          </div>
          <button className="waitlist-button">Join Waitlist</button>
        </div>
      </footer>
    </div>
  );
};

export default MunchyClone;