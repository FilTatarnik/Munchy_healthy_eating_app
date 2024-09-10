import React from 'react';

const Recipes = () => {
  return (
    <section id="recipes" className="section">
      <div className="recipes">
        <h2>Latest Healthy Recipes</h2>
        <div className="recipe-grid">
          <div className="recipe-item">
            <h3>Quinoa Salad</h3>
            <p>A refreshing and nutritious salad packed with protein and vitamins.</p>
          </div>
          <div className="recipe-item">
            <h3>Grilled Chicken with Avocado Salsa</h3>
            <p>Lean protein paired with a creamy, tangy avocado salsa.</p>
          </div>
          {/* Add more recipe items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Recipes;