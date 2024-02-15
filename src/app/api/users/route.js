import { prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const { email, username, password } = await req.json();

    //check email already exist or not
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingEmail) {
      return NextResponse.json(
        { message: "User with this email already exist" },
        { status: 422 }
      );
    }

    //check email already exist or not
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      return NextResponse.json(
        { message: "This Username already exist" },
        { status: 409 }
      );
    }

    //create new user
    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { data: newUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
