import axios from "axios";
import ICategory from "../types/elements/Category";

const getAllCategories = async () => {
  const res = await axios.get("api/Category", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

const getCategory = async (id: number) => {
  const res = await axios.get(`api/Category/${id}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

const createCategory = async (category: ICategory) => {
  const res = await axios.post(
    `api/Category`,
    {
      new_category: category,
    },
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  return res.data.data;
};
const updateCategory = async (category: ICategory) => {
  const res = await axios.put(
    `api/Category`,
    {
      updated_category: category,
    },
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  return res.data.data;
};
const deleteCategory = async (id: number) => {
  const res = await axios.delete(`api/Category/${id}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return res.data.data;
};

export default {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
