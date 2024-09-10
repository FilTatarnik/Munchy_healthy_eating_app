import React, { useState } from 'react';
import Modal from './Modal';

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipesData = [
    {
      id: 1,
      title: "Quinoa Salad",
      description: "A refreshing and nutritious salad packed with protein and vitamins.",
      fullDescription: "This quinoa salad is perfect for a light lunch or dinner. It's packed with nutrients and can be customized with your favorite vegetables.",
      ingredients: ["1 cup quinoa", "2 cups water", "1 cucumber, diced", "1 tomato, diced", "1/4 cup olive oil", "2 tbsp lemon juice", "Salt and pepper to taste"],
      instructions: ["Cook quinoa according to package instructions.", "While quinoa is cooling, mix cucumber and tomato in a large bowl.", "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.", "Add cooled quinoa to the vegetables and pour the dressing over. Toss to combine.", "Chill for at least 30 minutes before serving."],
      link: "https://example.com/quinoa-salad-recipe"
    },
    // Add more recipes with similar structure
  ];

  return (
    <section id="recipes" className="section">
      <div className="recipes">
        <h2>Latest Healthy Recipes</h2>
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