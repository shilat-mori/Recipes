import axios from "axios";
import IRecipe from "../types/elements/Recipe";

const getAllRecipes = async () => {
  const res = await axios.get("/api/Recipe", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

const getFavoriteRecipes = async () => {
  const res = await axios.get("/api/Recipe", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

const getRecipe = async (id: number) => {
  const res = await axios.get(`/api/Reccipe/${id}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
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
const updateReipe = async (recipe: IRecipe) => {
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

export  {
  getAllRecipes,
  getFavoriteRecipes,
  getRecipe,
  createRecipe,
  updateReipe,
  deleteRecipe,
};
