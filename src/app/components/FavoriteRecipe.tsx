"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteRecipes } from "../services/Recipe";
import IRecipe from "../types/models/RecipeType";
import RecipeCard from "./RecipeCard";

const FavoriteRecipe = ({
  selectedCategory,
  searchTerm,
}: {
  selectedCategory: number | null;
  searchTerm: string;
}) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  const { isLoading, error, data } = useQuery({
    queryKey: ["favoriteRecipes", selectedCategory],
    queryFn: async () => await getFavoriteRecipes(true),
  });

  useEffect(() => {
    if (data) {
      let filteredRecipes = data;

      if (selectedCategory !== null) {
        filteredRecipes = filteredRecipes.filter(
          (recipe: IRecipe) => recipe.category_id === selectedCategory
        );
      }

      if (searchTerm) {
        filteredRecipes = filteredRecipes.filter((recipe: IRecipe) =>
          recipe.recipe_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setRecipes(filteredRecipes);
    }
  }, [data, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching favorite recipes</p>
        ) : (
          paginatedRecipes.map((recipe: IRecipe, index: number) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        )}
      </div>

      <div className="pagination-controls flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-button bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="page-indicator text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FavoriteRecipe;
