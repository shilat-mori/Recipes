import React, { useState } from "react";
import Image from "next/image";
import styles from "./RecipeCard.module.css";
import IRecipe from "../types/elements/Recipe";

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false); 
  const [isFavorite, setIsFavorite] = useState(recipe.favorite || false); 

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
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
            Ingredients: {recipe.ingredients?.join(", ") || "No ingredients available"}
          </p>
          <div className={styles.footer}>
            <button className={styles.button} onClick={handleModalToggle}>
              Read more
            </button>
            <div
              className={`${styles.star} ${
                isFavorite ? styles.starFilled : styles.starEmpty
              }`}
              onClick={toggleFavorite}
            >
              {isFavorite ? "★" : "☆"}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={handleModalToggle}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{recipe.recipe_name}</h2>
            <div>
              <Image
                src={recipe.img}
                alt={recipe.recipe_name}
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <p>
              <strong>Category:</strong> {recipe.category_id}
            </p>
            <p>
              <strong>Ingredients:</strong>
            </p>
            <ul>
              {(recipe.ingredients || []).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>
              <strong>Instructions:</strong> {recipe.description}
            </p>
            <button onClick={handleModalToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
