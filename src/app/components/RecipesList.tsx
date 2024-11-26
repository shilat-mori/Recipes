"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteRecipes } from "../services/Recipe";
import { getAllRecipes } from "../../../Recipes/src/app/services/Recipe";
import IRecipe from "../types/models/RecipeType";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const { isLoading, error, data } = useQuery({
    queryKey: [""],
    queryFn: async () =>
      (await (lastSegment === "favorite"))
        ? getFavoriteRecipes(true)
        : getAllRecipes(),
  });
  return (
    <div className="grid grid-cols-5">
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p></p>
      ) : (
        data &&
        data.map((recipe: IRecipe, index: number) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      )}
    </div>
  );
};

export default RecipesList;
