"use client";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <ul className="flex">
      <NavItem {...{text:"All Recipes", navigation:"/pages/AllRecipes"}} />
      <NavItem {...{text:"Favorite Recipes", navigation:"/pages/FavoriteRecipes"}}/>
    </ul>
  );
};

export default NavBar;
