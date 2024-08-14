import React, { useState } from 'react';

const Main = () => {
  const [boost, setBoost] = useState('');

  const handleBoost = () => {
    console.log('Boosted:', boost);
  };

  return (
    <main>
      <section id="home" className="section">
        <div className="hero">
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
        </div>
        <div className="full-width-image">
        <img src="./assets/image1.jpg" alt="Healthy lifestyle" />
      </div>

      </section>


      <section id="features" className="section">
        <div className="features">
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
        </div>
      </section>

      <div className="full-width-image">
        <img src="/api/placeholder/1920/600" alt="Healthy food" />
      </div>

      <section id="testimonials" className="section">
        <div className="testimonials">
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
        </div>
      </section>
    </main>
  );
};

export default Main;