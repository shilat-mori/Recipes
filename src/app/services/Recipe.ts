import axios from "axios";
import IRecipe from "../types/elements/Recipe";

const getAllRecipes = async () => {
  try {
    const res = await axios.get("/api/Recipe", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    throw error;
  }
};
const getFavoriteRecipes = async (favorite: boolean) => {
  try {
    const res = await axios.get(`/api/Recipe/favorite/${favorite}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    throw error;
  }
};

const getRecipe = async (id: number) => {
  try {
    const res = await axios.get(`/api/Recipe/${id}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

const createRecipe = async (recipe: IRecipe) => {
  const res = await axios.post(
    `/api/Recipe`,
    {
      new_recipe: recipe,
    },
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  return res.data.data;
};
const updateRecipe = async (recipe: IRecipe) => {
  const res = await axios.put(
    `/api/Recipe`,
    {
      updated_recipe: recipe,
    },
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  return res.data.data;
};
const deleteRecipe = async (id: number) => {
  const res = await axios.delete(`/api/Recipe/${id}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

export {
  getAllRecipes,
  getFavoriteRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
