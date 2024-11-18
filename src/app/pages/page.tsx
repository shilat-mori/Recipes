import React from 'react'
import RecipeCard from '../components/RecipeCard'
import connect from "../lib/db/mongodb";

const page = () => {
  connect()
  return (
    <div >
       <RecipeCard/>
    </div>
  )
}

export default page