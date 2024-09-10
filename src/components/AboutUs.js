import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Munchy</h2>
        
        <div className="about-content staggered-layout">
          <div className="about-item">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>At Munchy, we're passionate about inspiring and guiding you towards a healthier lifestyle. We believe that nutritious meals and engaging exercise routines are the cornerstones of wellness.</p>
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
              <h3>Our Approach</h3>
              <p>We curate and create recipes that are not only healthy but delicious and easy to make. Our workouts are designed to be effective and adaptable to various fitness levels.</p>
            </div>
          </div>
          
          <div className="about-item">
            <div className="about-text">
              <h3>Our Team</h3>
              <p>Founded by fitness enthusiasts and nutrition experts, our team is dedicated to providing you with the best content to support your wellness journey.</p>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/600/400" alt="Our team" />
            </div>
          </div>
        </div>
        
        <div className="about-cta">
          <h3>Join Our Community</h3>
          <p>Subscribe to our newsletter for weekly recipes, workout tips, and motivation!</p>
          <button className="cta-button">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;