import React from 'react';

const Workouts = () => {
  return (
    <section id="workouts" className="section">
      <div className="workouts">
        <h2>Featured Workouts</h2>
        <div className="workout-grid">
          <div className="workout-item">
            <h3>30-Minute HIIT Cardio</h3>
            <p>Burn calories and boost your metabolism with this high-intensity workout.</p>
          </div>
          <div className="workout-item">
            <h3>Yoga for Flexibility</h3>
            <p>Improve your flexibility and reduce stress with this calming yoga routine.</p>
          </div>
          {/* Add more workout items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Workouts;