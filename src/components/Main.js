import React, { useState } from 'react';
import Recipes from './Recipes';
import Workouts from './Workouts';
import AboutUs from './AboutUs';
import healthyFoodImage from '../assets/image1.jpg';

const Main = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    // Here you would typically send the email to your backend
    setEmail('');
  };

  return (
    <main>
      <section id="home" className="section">
        <div className="hero">
          <h2 className="main-title">Healthy Recipes & Workouts</h2>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="subscribe-description">
            Sign up to see what recipes & workouts I'm checking out at the moment!
          </p>
        </div>
        <div className="full-width-image">
          <img src="/api/placeholder/1920/600" alt="Healthy lifestyle" />
        </div>
      </section>

      <Recipes />

      {/* <div className="full-width-image">
        <img src={healthyFoodImage} alt="Healthy food" />
      </div> */}

      <Workouts />

      <AboutUs />
    </main>
  );
};

export default Main;