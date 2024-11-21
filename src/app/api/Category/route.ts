import connect from "@/app/lib/db/mongodb";
import Category from "@/app/lib/models/Category";
import ICategory from "@/app/types/models/CategoryType";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Category.find();
    return NextResponse.json({ message: "GET success", data: data });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await connect();
    const category: ICategory = new Category({
      id: data.new_category.id,
      category_name: data.new_category.category_name,
    });
    console.log(category);

    const res = await category.save();
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
    const category: ICategory = new Category({
      id: data.updated_category.id,
      category_name: data.updated_category.category_name,
    });
    console.log(category);

    const res = await category.save()
    //   { id: category.id },
    //   { category_name: category.category_name }
    // );
    if (res) console.log("create successful");
    else console.log("update successful");
    return NextResponse.json({
      message: "GET success",
      data: res.modifiedCount,
    });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
