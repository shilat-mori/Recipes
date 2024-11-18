"use client";
import React from "react";
import type NavItem from "../types/props/NavItem";
import { useRouter } from "next/navigation";

const NavItem = (props: NavItem) => {
  const router = useRouter();
  return (
    <div className="border-b-2 border-slate-100">
      <li className="navItem relative" onClick={() => {router.push(props.navigation)}}>
        {props.text}
      </li>
    </div>
  );
};

export default NavItem;
