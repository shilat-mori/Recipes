"use client";
import React from "react";
import { getAllCategories } from "../services/Category";
import { useQuery } from "@tanstack/react-query";
import ICategory from "../types/models/CategoryType";

const CategorySelect = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: [""],
    queryFn: async () =>
      await getAllCategories(),
  });
  return (
    <select className="input rectangle flex" defaultValue="">
      
    {(isLoading || error) && (<option value="" disabled>
        Choose category
      </option>)}
      {
    (data) && (
      data.map((item:ICategory, index:number) =>
        <option key={index} value={item.id}>{item.category_name}</option>
      )
    )}
    </select>
  );
};

export default CategorySelect;
