import RecipeCard from "@/app/components/RecipeCard";
import React from "react";

const recipes = [
  {
    id: 1,
    category_id: 1,
    img: "/img/cake.jpg",
    recipe_name: "Cake",
    ingredients: ["Flour", "Sugar", "Eggs"],
    favorite:true,
    description: "A delicious cake",
  },
  {
    id: 2,
    category_id: 2,
    img: "/img/salad.jpg",
    recipe_name: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
    favorite:false,
    description: "Tasty pasta",
  },
  {
    id: 3,
    category_id: 3,
    img: "/img/salad1.jpg",
    recipe_name: "Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber"],
    favorite:false,
    description: "Healthy salad",
  },
];

const Page = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Page;
