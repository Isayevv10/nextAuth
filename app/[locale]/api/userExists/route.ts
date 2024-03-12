import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    const user = await User.findOne({ email }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "User Cannot Find" }, { status: 500 });
  }
}
