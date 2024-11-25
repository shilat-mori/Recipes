import connect from "@/app/lib/db/mongodb";
import Category from "@/app/lib/models/Category";
import { NextRequest, NextResponse } from "next/server";

// GET: קריאת כל הקטגוריות
export async function GET() {
  try {
    await connect();
    const data = await Category.find();

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "No categories found", data: [] });
    }

    return NextResponse.json({ message: "GET success", data });
  } catch (err) {
    return NextResponse.json({ message: `GET error: ${err}`, data: null });
  }
}

// POST: יצירת קטגוריה חדשה
export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.new_category || !data.new_category.id || !data.new_category.category_name) {
    return NextResponse.json({ message: "Invalid data", data: null });
  }

  try {
    await connect();
    const category = new Category(data.new_category);
    const res = await category.save();
    return NextResponse.json({ message: "POST success", data: res });
  } catch (err) {
    return NextResponse.json({ message: `POST error: ${err}`, data: null });
  }
}

// PUT: עדכון קטגוריה קיימת
export async function PUT(req: NextRequest) {
  const data = await req.json();

  if (!data.updated_category || !data.updated_category.id || !data.updated_category.category_name) {
    return NextResponse.json({ message: "Invalid data", data: null });
  }

  try {
    await connect();
    const res = await Category.updateOne(
      { id: data.updated_category.id },
      { category_name: data.updated_category.category_name }
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
