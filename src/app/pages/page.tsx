"use client";
import React from "react";
import RecipeCard from "../components/RecipeCard";
import { updateCategory } from "../services/Category";
import ICategory from "../types/elements/Category";
const page = async () => {
  const category: ICategory = {
    id: 7,
    category_name: "cookies",
  };
  const a = await updateCategory(category);
  console.log("res from api call: ", a);

  return (
    <div>
      <RecipeCard />
    </div>
  );
};

export default page;
