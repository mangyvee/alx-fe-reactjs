import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-green-700 drop-shadow-md mb-4">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
        Discover, share, and enjoy recipes from around the world.  
        This is just the beginning — soon, you’ll be able to browse and upload your own recipes!
      </p>

      {/* Sample Recipe Card */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mb-10">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Delicious pasta"
          className="rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Creamy Alfredo Pasta
        </h2>
        <p className="text-gray-600 mb-4">
          A rich and creamy pasta dish made with fresh cream, parmesan, and garlic.
        </p>
        <button className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          View Recipe
        </button>
      </div>

      {/* Example button */}
      <button className="px-8 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition">
        + Add New Recipe
      </button>
    </div>
  );
}

export default App;
