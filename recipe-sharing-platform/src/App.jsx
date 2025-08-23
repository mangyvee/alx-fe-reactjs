import React from "react";
import HomePage from "./components/HomePage";

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

      {/* Home Page Recipe Cards */}
      <HomePage />  {/* <-- Insert HomePage component here */}

      {/* Example button */}
      <button className="mt-10 px-8 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition">
        + Add New Recipe
      </button>
    </div>
  );
}

export default App;
