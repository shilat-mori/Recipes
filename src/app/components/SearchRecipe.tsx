"use client";
import React from "react";

const SearchRecipe = ({
  onSearchChange,
}: {
  onSearchChange: (term: string) => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      className="input rectangle flex"
      placeholder="Search recipe"
      onChange={handleInputChange}
    />
  );
};

export default SearchRecipe;
