import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const { email, name, password } = body;
    if (!email || !password || !name) {
      console.log(name);
      return new NextResponse("Missing Info", { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (e) {
    console.log(e, "Register error");
    return new NextResponse("Internal server error", { status: 500 });
  }
}