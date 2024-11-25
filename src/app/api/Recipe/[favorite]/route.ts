import connect from "@/app/lib/db/mongodb";
import Category from "@/app/lib/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { favorite: number } }
) {
  const { favorite } = params;
  try {
    await connect();
    const data = await Category.find({ favorite: favorite });
    return NextResponse.json({ message: "GET success", data: data });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
