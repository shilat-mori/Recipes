"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NewRecipe = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Back Button */}
      <div className="mb-4">
          <span className="material-icons mr-2" onClick={()=>{router.back()}}>{"< Back"}</span> 
      </div>

      {/* Form Container */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Add Recipe</h2>
        <form className="grid grid-cols-2 gap-6">
          {/* Meal Name Input */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Meal name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Category Dropdown */}
          <div className="col-span-1">
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Category</option>
              <option value="appetizer">Appetizer</option>
              <option value="main">Main Dish</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          {/* Image URL Input */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Ingredient Input with Add Button */}
          <div className="col-span-1 flex items-center">
            <input
              type="text"
              placeholder="Ingredient"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="button"
              className="ml-3 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700"
            >
              +
            </button>
          </div>

          {/* Instructions Text Area */}
          <div className="col-span-2">
            <textarea
              placeholder="Instructions"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Add Button */}
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
