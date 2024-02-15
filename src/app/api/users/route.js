import { database } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    //check email already exist or not
    const existingEmail = await database.user.findUnique({
      where: { email },
    });
    if (existingEmail) {
      return NextResponse.json(
        { message: "User with this email already exist" },
        { status: 409 }
      );
    }

    //check email already exist or not
    const existingUsername = await database.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      return NextResponse.json(
        { message: "This Username already exist" },
        { status: 409 }
      );
    }

    //create new user
    const newUser = await database.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    return NextResponse.json(body);
  } catch (error) {}
}
