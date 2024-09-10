import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Fil's Fitness Goals</h2>
        
        <div className="about-content staggered-layout">
          <div className="about-item">
            <div className="about-text">
              <h3>My Mission</h3>
              <p>At Munchy, I'm passionate about inspiring and guiding you towards a healthier lifestyle. I believe that nutritious meals and engaging exercise routines are the cornerstones of wellness.</p>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/600/400" alt="Healthy lifestyle" />
            </div>
          </div>
          
          <div className="about-item reverse">
            <div className="about-image">
              <img src="/api/placeholder/600/400" alt="Fresh ingredients" />
            </div>
            <div className="about-text">
              <h3>My Approach</h3>
              <p>I curate and showcase recipes that are not only healthy but delicious and easy to make, that i've grown to love over my life. My workouts are designed to be effective and adaptable to various fitness levels.</p>
            </div>
          </div>
          
          <div className="about-item">
            <div className="about-text">
              <h3>Our Team</h3>
              <p>Founded by Filip Tatarnik, I am is dedicated to providing you with updates to my Fitness and Wellness Journey.</p>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/600/400" alt="Our team" />
            </div>
          </div>
        </div>
        
        <div className="about-cta">
          <h3>Get Annoyed by my Email Newsletter that I totally Didn't write.</h3>
          <p>Subscribe to my newsletter!</p>
          <button className="cta-button">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;