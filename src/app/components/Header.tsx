"use client";
import React, { useState } from "react";
import CategorySelect from "./CategorySelect";
import SearchRecipe from "./SearchRecipe";
import { useRouter, usePathname } from "next/navigation";
import NavBar from "./NavBar";
import RecipesList from "./RecipesList";
import FavoriteRecipe from "./FavoriteRecipe";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCLickAdd = () => {
    router.push("/pages/new_recipe");
  };

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="header">
        <div className="flex w-1/2 justify-start">
          <CategorySelect onChange={handleCategoryChange} />
          <SearchRecipe onSearchChange={handleSearchChange} />
        </div>
        <div className="flex w-1/2 justify-end">
          <button className="rectangle" onClick={handleCLickAdd}>
            New Recipe
          </button>
        </div>
      </div>
      <div className="h-8 m-4">
        <NavBar />
      </div>

      {pathname === "/pages/recipes/all_recipes" && (
        <RecipesList
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />
      )}

      {pathname === "/pages/recipes/favorite" && <FavoriteRecipe selectedCategory={selectedCategory} searchTerm={searchTerm} />}
    </div>
  );
};

export default Header;
