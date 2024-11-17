"use client";
import React from "react";

const CategorySelect = () => {
  return (
    <select className="input rectangle flex" defaultValue="">
      <option value="" disabled>
        Choose category
      </option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  );
};

export default CategorySelect;
