import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load data when component mounts
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Optional section header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-700">
        Discover Delicious Recipes
      </h1>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                  View Recipe
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
