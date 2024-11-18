"use client";
import React from "react";
import type NavItem from "../types/props/NavItem"

const NavItem = (props:NavItem) => {
  return (
    <div className="border-b-2 border-slate-100">
      <li className="navItem relative" onClick={()=>{}}>{props.text}</li>
    </div>
  );
};

export default NavItem;
