"use client";
import React from "react";
import CategorySelect from "./CategorySelect";
import SearchRecipe from "./SearchRecipe";
import { useRouter } from "next/navigation";
import NavBar from "./NavBar";
const Header = () => {
  const router = useRouter();
  const handleCLickAdd = () => {
    router.push("/pages/new_recipe");
  };
  return (
    <div>
      <div className="header">
        <div className="flex w-1/2 justify-start">
          <CategorySelect />
          <SearchRecipe />
        </div>
        <div className="flex w-1/2 justify-end">
          <button className="rectangle" onClick={handleCLickAdd}>
            New Recipe
          </button>
        </div>{" "}
      </div>{" "}
      <div className="h-8 m-4">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
