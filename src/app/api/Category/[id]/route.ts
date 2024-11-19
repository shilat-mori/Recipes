import connect from "@/app/lib/db/mongodb";
import Category from "@/app/lib/models/Category";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    await connect();
    const data = await Category.find({ id: id });
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
    const data = await Category.deleteOne({ id: id });
    if(data.deletedCount==1) console.log('deleted successful');
    else console.log('did not delete');
    
    return NextResponse.json({ message: "GET success" });
  } catch (err) {
    return NextResponse.json({ message: "GET error: " + err, data: null });
  }
}
