import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients, separated by commas";
    if (!instructions.trim() || instructions.split("\n").length < 2)
      newErrors.instructions = "Enter at least 2 steps";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Mock submission (replace with actual POST logic later)
      console.log({ title, ingredients, instructions });

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 ring-red-200" : "border-gray-300 ring-green-200"
            }`}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 ring-red-200" : "border-gray-300 ring-green-200"
            }`}
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Preparation Steps (each step on a new line)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.instructions ? "border-red-500 ring-red-200" : "border-gray-300 ring-green-200"
            }`}
            rows="6"
          />
          {errors.instructions && <p className="text-red-500 mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
