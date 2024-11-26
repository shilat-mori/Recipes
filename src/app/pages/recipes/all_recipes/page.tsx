"use client"
import RecipeCard from "@/app/components/RecipeCard";
import React, { useEffect, useState } from "react";
import { getAllRecipes } from "@/app/services/Recipe";
import IRecipe from "@/app/types/elements/Recipe"; // ייבוא הממשק IRecipe

// const recipes = [
//   {
//     id: 1,
//     category_id: 1,
//     img: "/img/cake.jpg",
//     recipe_name: "Cake",
//     ingredients: ["Flour", "Sugar", "Eggs"],
//     favorite:true,
//     description: "A delicious cake",
//   },
//   {
//     id: 2,
//     category_id: 2,
//     img: "/img/salad.jpg",
//     recipe_name: "Pasta",
//     ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
//     favorite:false,
//     description: "Tasty pasta",
//   },
//   {
//     id: 3,
//     category_id: 3,
//     img: "/img/salad1.jpg",
//     recipe_name: "Salad",
//     ingredients: ["Lettuce", "Tomatoes", "Cucumber"],
//     favorite:false,
//     description: "Healthy salad",
//   },
// ];

const Page = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]); // ניהול הנתונים שמגיעים מהשרת
  const [isLoading, setIsLoading] = useState(true); // ניהול מצב טעינה
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes(); // קריאה לשרת לקבלת הנתונים
        setRecipes(data); // שמירת הנתונים ב-state
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false); // סיום מצב הטעינה
      }
    };
    fetchRecipes(); // הפעלת הפונקציה
  }, []);
  if (isLoading) {
    return <p>Loading recipes...</p>; // תצוגת מצב טעינה
  }

  if (!recipes.length) {
    return <p>No recipes available</p>; // הודעה במקרה שאין נתונים
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Page;
