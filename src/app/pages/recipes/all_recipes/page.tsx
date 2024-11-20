import RecipeCard from "@/app/components/RecipeCard";
import React from "react";

const recipes = [
  {
    id: 1,
    category_id: 1,  // כאן תוכל להוסיף את ה-id של הקטגוריה
    img: "/img/cake1.jpg",  // השתמש בנתיב נכון
    recipe_name: "Cake",  // הוסף את שם המתכון
    ingredients: ["Flour", "Sugar", "Eggs"],  // תוכל להוסיף מרכיבים אם יש
    description: "A delicious cake",
  },
  {
    id: 2,
    category_id: 2,
    img: "/img/pasta.jpg",
    recipe_name: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
    description: "Tasty pasta",
  },
  {
    id: 3,
    category_id: 3,
    img: "/img/salad.jpg",
    recipe_name: "Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber"],
    description: "Healthy salad",
  },
  // הוסיפי עד 10 מתכונים כאן
];

const Page = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          category_id={recipe.category_id}
          img={recipe.img}
          recipe_name={recipe.recipe_name}
          ingredients={recipe.ingredients}
          description={recipe.description}
        />
      ))}
    </div>
  );
};

export default Page;
