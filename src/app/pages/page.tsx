"use client";
import React from "react";
import { createRecipe } from "../services/Recipe";
import IRecipe from "../types/elements/Recipe";
// import RecipeCard from "../components/RecipeCard";
const page = async () => {
  const recipe: IRecipe = {
    id: 1,
    category_id: 1,
    img: "string",
    recipe_name: "cake",
    ingredients: ["kilo flour", "1 cup sugar", "2 egg", "1 cup water "],
    favorite: true,
    description: "tasty food",
  };
  const a = await createRecipe(recipe);
  console.log("res from api call: ", a);

  return <div>{/* <RecipeCard /> */}</div>;
};

export default page;
