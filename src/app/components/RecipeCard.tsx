import React from "react";
import Image from "next/image";
import styles from "./RecipeCard.module.css";
import IRecipe from "../types/elements/Recipe";

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={recipe.img}
          alt={recipe.recipe_name}
          layout="fill"  
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.recipe_name}</h3>
        <p className={styles.category}>Category ID: {recipe.category_id}</p>
        <p className={styles.ingredients}>
          Ingredients: {recipe.ingredients.join(", ")}
        </p>
        <p className={styles.description}>{recipe.description}</p>
        <div className={styles.footer}>
          <button className={styles.button}>Read more</button>
          <div className={styles.star}>⭐</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
