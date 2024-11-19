import connect from "@/app/lib/db/mongodb";
import Recipe from "@/app/lib/models/Recipe";
import IRecipe from "@/app/types/models/RecipeType";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Recipe.find();
    return NextResponse.json({ message: "GET success", data: data });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await connect();
    const recipe: IRecipe = new Recipe({
      id: data.new_recipe.id,
      category_id: data.new_recipe.category_id,
      img: data.new_recipe.img,
      recipe_name: data.new_recipe.recipe_name,
      ingredients: data.new_recipe.ingredients,
      description: data.new_recipe.description,
    });
    console.log(recipe);

    const res = await recipe.save();
    if (res) console.log("create successful");
    else console.log("already exists");

    return NextResponse.json({ message: "GET success" });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  try {
    await connect();
    const recipe: IRecipe = new Recipe({
      id: data.new_recipe.id,
      category_id: data.new_recipe.category_id,
      img: data.new_recipe.img,
      recipe_name: data.new_recipe.recipe_name,
      ingredients: data.new_recipe.ingredients,
      description: data.new_recipe.description,
    });
    console.log(recipe);

    const res = await recipe.save();
    if (res) console.log("create successful");
    else console.log("update successful");
    return NextResponse.json({ message: "GET success" });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
