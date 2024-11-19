import connect from "@/app/lib/db/mongodb";
import Recipe from "@/app/lib/models/Recipe";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    await connect();
    const data = await Recipe.find({ id: id });
    return NextResponse.json({ message: "GET success", data: data });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    await connect();
    const data = await Recipe.deleteOne({ id: id });
    if(data.deletedCount==1) console.log('deleted successful');
    else console.log('did not delete');
    
    return NextResponse.json({ message: "GET success" });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
