"use client";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <ul className="flex">
      <NavItem {...{text:"All Recipes", navigation:"/pages/recipes/all_recipes"}} />
      <NavItem {...{text:"Favorite Recipes", navigation:"/pages/recipes/favorite_recipes"}}/>
    </ul>
  );
};

export default NavBar;
