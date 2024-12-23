"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteRecipes, getAllRecipes } from "../services/Recipe";
import IRecipe from "../types/models/RecipeType";
import RecipeCard from "./RecipeCard";

const RecipesList = ({
  selectedCategory,
  searchTerm,
}: {
  selectedCategory: number | null;
  searchTerm: string;
}) => {
  const pathname = usePathname();
  const isFavoritesPage = pathname === "/favorite";

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  const { isLoading, error, data } = useQuery({
    queryKey: ["recipes", selectedCategory],
    queryFn: async () =>
      isFavoritesPage ? await getFavoriteRecipes(true) : await getAllRecipes(),
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
  }, [selectedCategory, data, searchTerm]);

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
          <p>loading...</p>
        ) : error ? (
          <p>Error fetching recipes</p>
        ) : (
          paginatedRecipes.map((recipe: IRecipe, index: number) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        )}
      </div>

      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-indicator">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipesList;
