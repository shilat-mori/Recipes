import connect from "@/app/lib/db/mongodb";
import Recipe from "@/app/lib/models/Recipe";
import { NextRequest, NextResponse } from "next/server";

// GET: קריאת כל הקטגוריות
export async function GET() {
  try {
    await connect();
    const data = await Recipe.find();

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "No recipes found", data: [] });
    }

    return NextResponse.json({ message: "GET success", data });
  } catch (err) {
    return NextResponse.json({ message: `GET error: ${err}`, data: null });
  }
}

// POST: יצירת קטגוריה חדשה
export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.new_recipe || !data.new_recipe.id || !data.new_recipe.recipe_name) {
    return NextResponse.json({ message: "Invalid data", data: null });
  }

  try {
    await connect();
    const recipe = new Recipe(data.new_recipe);
    const res = await recipe.save();
    return NextResponse.json({ message: "POST success", data: res });
  } catch (err) {
    return NextResponse.json({ message: `POST error: ${err}`, data: null });
  }
}

// PUT: עדכון קטגוריה קיימת
export async function PUT(req: NextRequest) {
  const data = await req.json();

  if (!data.updated_recipe || !data.updated_recipe.id || !data.updated_recipe.recipe_name) {
    return NextResponse.json({ message: "Invalid data", data: null });
  }

  try {
    await connect();
    const res = await Recipe.updateOne(
      { id: data.updated_recipe.id },
      { recipe_name: data.updated_recipe.recipe_name }
    );

    if (res.modifiedCount > 0) {
      return NextResponse.json({ message: "PUT success", data: res });
    } else {
      return NextResponse.json({ message: "No changes made", data: res });
    }
  } catch (err) {
    return NextResponse.json({ message: `PUT error: ${err}`, data: null });
  }
}
