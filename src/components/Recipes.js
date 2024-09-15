import React, { useState } from 'react';
import Modal from './Modal';

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipesData = [
    {
      title: "Ground Beef/Black Beans + Veggies",
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
    {
      title: "Classic Chicken Parmesan",
      description: "Crispy breaded chicken cutlets topped with marinara sauce and melted cheese.",
      fullDescription: "Thin chicken cutlets coated in seasoned Italian breadcrumbs, pan-fried to golden perfection, then topped with rich marinara sauce and melted mozzarella cheese. Finished under the broiler for that irresistible cheesy crust.",
      ingredients: [
        "2 chicken breasts, pounded thin",
        "2 cups Italian seasoned breadcrumbs",
        "2 large eggs, beaten",
        "1/4 cup olive oil",
        "4 cloves garlic, minced",
        "2 cups marinara sauce",
        "2 cups shredded mozzarella cheese",
        "1/4 cup grated Parmesan cheese",
        "Salt and pepper to taste",
        "Fresh basil leaves for garnish"
      ],
      instructions: [
        "Set up a breading station with three shallow dishes: one with flour, one with beaten eggs, and one with Breadcrumbs.",
        "Slice your cutletts into 2-3 thinner cutlets. The chicken to breading ration has to be good, you don't want your chicken too thick. Season the chicken cutlets with salt and pepper. Dredge each cutlet in egg, and finally coat with breadcrumbs, you want to get every square cm of this cutlet coated. Sprinkle more ontop then firmly press onto the cutlet to make it stick. No naked spots allowed.",
        "In a large skillet, heat olive oil or any other high smoke point oil you have. I don't like using Extra Virgin Olive Oil because over medium heat. Add minced garlic and sauté for about 30 seconds until fragrant.",
        "Cook the breaded chicken cutlets in the garlic-infused oil for 3-4 minutes per side, until golden brown and cooked through. Work in batches if necessary.",
        "Transfer the cooked cutlets to a baking sheet. Top each cutlet with marinara sauce, shredded mozzarella, and grated Parmesan.",
        "Place under the broiler for 2-3 minutes, or until the cheese is melted and bubbly with some golden spots.",
        "Garnish with fresh basil leaves before serving."
      ],
      link: "https://example.com/classic-chicken-parmesan"
    },
    {
      title: "Oven Roasted Tomato Soup",
      description: "A rich and flavorful tomato soup made with oven-roasted vegetables, sized for a 9x11 sheet pan.",
      fullDescription: "This comforting Oven Roasted Tomato Soup brings out the natural sweetness of tomatoes through high-heat roasting. Garlic and onions add depth, while a touch of cream lends silky smoothness. This smaller batch is perfect for a 9x11 sheet pan, ideal for 2-3 servings.",
      ingredients: [
        "1 lb ripe tomatoes, quartered (about 4-5 medium tomatoes)",
        "1 medium onion, cut into wedges",
        "4 cloves garlic, peeled",
        "2 tbsp olive oil",
        "1 tsp dried thyme",
        "1/2 tsp dried oregano",
        "Salt and freshly ground black pepper to taste",
        "1/4 cup heavy cream",
        "Fresh basil leaves for garnish (optional)"
      ],
      instructions: [
        "Preheat the oven to 450°F (230°C).",
        "On a 9x11 inch baking sheet, spread out the quartered tomatoes, onion wedges, and garlic cloves in a single layer.",
        "Drizzle the vegetables with olive oil and sprinkle with thyme, oregano, salt, and pepper. Toss to coat evenly.",
        "Roast in the preheated oven for about 40-60 minutes, or until the vegetables are soft and are caramelizing.",
        "Use an immersion blender to puree the soup until smooth. Alternatively, carefully transfer the soup to a blender to puree.",
        "Transfer the blended vegetables to a medium pot. Bring to a simmer over medium heat.",
        "Stir in the heavy cream and adjust seasoning if needed.",
        "Simmer for an additional 5 minutes to let the flavors meld.",
        "Serve hot, garnished with fresh basil leaves if desired."
      ],
      link: "https://example.com/small-batch-oven-roasted-tomato-soup"
    }
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