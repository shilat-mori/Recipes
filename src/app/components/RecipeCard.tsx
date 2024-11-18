import Image from "next/image";
import styles from "./RecipeCard.module.css";
import cakeImage from "../img/cake.jpg";

const RecipeCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={cakeImage}
          alt="Recipe"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Cake</h3>
        <p className={styles.category}>Category</p>
        <p className={styles.description}>
          Short Instructions description <br />
          Short Instructions description...
        </p>
        <div className={styles.footer}>
          <button className={styles.button}>Read more</button>
          <div className={styles.star}>⭐</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
