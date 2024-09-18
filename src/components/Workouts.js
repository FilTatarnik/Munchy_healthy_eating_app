import React, { useState } from 'react';
import Modal from './Modal';

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const workoutsData = [
    {
      id: 1,
      title: "Push",
      description: "",
      fullDescription: "Ideally I'd have two push workouts a week. One that is Chest focused and one that is Shoulder focused. What works for me is volume. I may not push the most weight all the time, but I'll get the reps in.",
      exercises: [
        { name: "Flat Bench Press" },
        { name: "Shoulder Press - Seated/Standing" },
        { name: "Incline/Decline Bench Press" },
        { name: "Chest McFlys" },
        { name: "Rear Delt Fly"},
        { name: "Close-Grip Bench Press"},
        { name: "Skullcrushers"},
        { name: "Tricep extension Variants"}
      ],
      instructions: ["Try getting at least 5-7 sets of 5 reps. If you're comfortable with the weight you can go for 3-4 sets for 10 reps and continue doing reps while bringing weight down.","If Chest focused day, start with Bench Press. If Shoulder focused day, start with Shoulder Press"],
      // link: "https://example.com/hiit-cardio-workout"
    },
    {
      id: 2,
      title: 'Pull',
      description: "",
      fullDescription: "Same with Push Days, I like having two Pull days a week. One that's Row Focused and One that's Lat focused.",
      exercises: [
        { name: "Deadlifts"},
        { name: "Lat Pulldown"},
        { name: "Seated Rows"},
        { name: "Pull-ups" },
        { name: "Bent-over Rows" },
        { name: "Reverse Flys" },
        { name: "Hammer Curls" },
        { name: "Standing Rope Curls"},
        { name: "Chin ups"}
      ],
      instructions: ["Try getting at least 5-7 sets of 5 reps. If you're comfortable with the weight you can go for 3-4 sets for 10 reps and continue doing reps while bringing weight down.","If Row focused day, start with Seated Row or Deadlift, then proceed to do the other one. If Lat focused day, start with Lat Pull Down"],
      // link: "https://example.com/hiit-cardio-workout",
    },
    {
      id: 3,
      title: 'Legs',
      description: "",
      fullDescription: "Two Leg days a week. One that's Squat heavy, and One that is hamstring focused.",
      exercises: [
        { name: "Squats" },
        { name: "Leg press | Calf Presses in between sets" },
        { name: "Laying Hamstring Curls" },
        { name: "Calf Raises" },
        { name: "Seated Calf Extensions"},
        { name: "Wall sits"}
      ],
      instructions: ["If Squat focus, start with Squat", "If Hamstring focus, start with Laying Hamstring Curls", "Heavy, Heavy, Heavy. Then work your way down to light weight but more reps.", "After doing Leg Press Sets, do a Set of Calf Presses while you're waiting."],
      // link: "https://example.com/hiit-cardio-workout",

    },

  ];

  return (
    <section id="workouts" className="section">
      <div className="workouts">
        <h2>Current Workouts</h2>
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
                <li key={index}>{exercise.name}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {selectedWorkout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            {/* <a href={selectedWorkout.link} target="_blank" rel="noopener noreferrer">View Full Workout</a> */}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Workouts;