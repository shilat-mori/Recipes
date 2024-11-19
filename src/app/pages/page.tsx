"use client"
import React from 'react'
import RecipeCard from '../components/RecipeCard'
import connect from "../lib/db/mongodb";

const page = () => {
  connect()
  return (
    <div >
       <RecipeCard/>

       <input/>
    </div>
  )
}

export default page