import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-10 text-red-600">Recipe not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 p-8">
      {/* Back to Home */}
      <Link
        to="/"
        className="text-green-700 font-semibold hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Recipe Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-600">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cooking Instructions */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Cooking Instructions:</h2>
            <ol className="list-decimal list-inside text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
