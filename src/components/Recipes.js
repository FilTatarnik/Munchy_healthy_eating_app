import React, { useState } from 'react';
import Modal from './Modal';

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipesData = [
    {
      title: "Meal Prep Ground Beef/Black Beans + Veggies",
      description: "A hearty meal with seasoned ground beef, vegetables, and rice.",
      fullDescription: "This recipe features flavorful ground beef, paired with sautéed vegetables and perfectly cooked rice. Ideal for meal prepping, it's packed with protein, fiber, and nutrients.",
      ingredients: [
        "1lb Ground Beef (grass-fed recommended)",
        "2-3 Cloves of Garlic",
        "1 Large Broccoli Head",
        "1 Bunch of Spinach",
        "1 Medium Sized Red Onion",
        "Olive Oil (enough for sautéing)",
        "1 Can of Black Beans",
        "1.5 cups White Rice (Three Horse Brand recommended)",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Heat olive oil in a pan and sauté one chopped garlic clove. Add the ground beef, breaking it up with a wooden utensil. Season with salt and pepper, and cook until browned and crispy. Optionally, add black beans and cook for another 5 minutes.",
        "For the veggies, rinse and dry the broccoli and spinach. Chop them along with the onion. Toss with olive oil, salt, and pepper, and sauté in a large pan for 8-10 minutes until softened. Strain to remove excess moisture.",
        "Rinse the rice and cook in a rice cooker with salt, pepper, and a bit of olive oil. Once done, fluff the rice and set aside.",
        "Assemble the meal by combining portions of beef, vegetables, and rice. Store in glass containers for easy meal prep."
      ],
      link: "https://example.com/meal-prep-chipotle-ground-beef"
    },
    // Add more recipes with similar structure
  ];

  return (
    <section id="recipes" className="section">
      <div className="recipes">
        <h2>Stuff I like to eat</h2>
        <div className="recipe-grid">
          {recipesData.map(recipe => (
            <div key={recipe.id} className="recipe-item" onClick={() => setSelectedRecipe(recipe)}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedRecipe} onClose={() => setSelectedRecipe(null)}>
        {selectedRecipe && (
          <div className="recipe-details">
            <h2>{selectedRecipe.title}</h2>
            <p>{selectedRecipe.fullDescription}</p>
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {selectedRecipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <a href={selectedRecipe.link} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Recipes;