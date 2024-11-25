import connect from "@/app/lib/db/mongodb";
import Recipe from "@/app/lib/models/Recipe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { favorite: boolean } }
) {
  const { favorite } = params;
  try {
    await connect();
    const data = await Recipe.find({ favorite: favorite });
    return NextResponse.json({ message: "GET success", data: data });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
