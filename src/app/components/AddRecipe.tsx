// AddRecipe.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CategorySelect from "./CategorySelect";
import IRecipe from "../types/elements/Recipe";

const AddRecipe = () => {
  const router = useRouter();

  const [recipeName, setRecipeName] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [img, setImg] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [favorite, setFavorite] = useState(false);

  const createRecipe = async (recipe: IRecipe) => {
    const res = await axios.post(
      `/api/Recipe`,
      { new_recipe: recipe },
      { headers: { "Cache-Control": "no-cache" } }
    );
    return res.data.data;
  };

  const addIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipeName || !categoryId || !img || ingredients.length === 0) {
      alert("Please fill out all fields.");
      return;
    }

    const newRecipe: IRecipe = {
      id: Date.now(),
      category_id: categoryId,
      img,
      recipe_name: recipeName,
      ingredients,
      favorite,
      description,
    };

    try {
      await createRecipe(newRecipe);
      alert("Recipe added successfully!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-4">
        <span className="material-icons mr-2" onClick={() => router.back()}>
          {"< Back"}
        </span>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Add Recipe</h2>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Meal name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <CategorySelect
              onChange={(value: number|null) => setCategoryId(value)}
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="col-span-1 flex items-center">
            <input
              type="text"
              placeholder="Ingredient"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
            />
            <button
              type="button"
              className="ml-3 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700"
              onClick={addIngredient}
            >
              +
            </button>
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Instructions"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col-span-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={favorite}
                onChange={(e) => setFavorite(e.target.checked)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span className="ml-2 text-gray-700">Mark as Favorite</span>
            </label>
          </div>
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

export default AddRecipe;
