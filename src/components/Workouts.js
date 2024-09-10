import React, { useState } from 'react';
import Modal from './Modal';

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const workoutsData = [
    {
      id: 1,
      title: "30-Minute HIIT Cardio",
      description: "Burn calories and boost your metabolism with this high-intensity workout.",
      fullDescription: "This HIIT workout is designed to maximize calorie burn and improve cardiovascular fitness in just 30 minutes.",
      exercises: [
        { name: "Jump Squats", duration: "45 seconds" },
        { name: "Push-ups", duration: "45 seconds" },
        { name: "Burpees", duration: "45 seconds" },
        { name: "Mountain Climbers", duration: "45 seconds" }
      ],
      instructions: ["Perform each exercise for 45 seconds", "Rest for 15 seconds between exercises", "Complete 3 rounds of the circuit", "Cool down with 5 minutes of light stretching"],
      link: "https://example.com/hiit-cardio-workout"
    },
    // Add more workouts with similar structure
  ];

  return (
    <section id="workouts" className="section">
      <div className="workouts">
        <h2>Featured Workouts</h2>
        <div className="workout-grid">
          {workoutsData.map(workout => (
            <div key={workout.id} className="workout-item" onClick={() => setSelectedWorkout(workout)}>
              <h3>{workout.title}</h3>
              <p>{workout.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedWorkout} onClose={() => setSelectedWorkout(null)}>
        {selectedWorkout && (
          <div className="workout-details">
            <h2>{selectedWorkout.title}</h2>
            <p>{selectedWorkout.fullDescription}</p>
            <h3>Exercises:</h3>
            <ul>
              {selectedWorkout.exercises.map((exercise, index) => (
                <li key={index}>{exercise.name} - {exercise.duration}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {selectedWorkout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <a href={selectedWorkout.link} target="_blank" rel="noopener noreferrer">View Full Workout</a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Workouts;