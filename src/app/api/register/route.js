import { NextResponse } from "next/server";
import { signupSchema } from "@/app/schemas/auth.schema";

export async function POST(request) {
  const body = await request.json();
  //   console.log(body);

  const result = signupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error);
  }

  return NextResponse.json(result.data);
}

export function GET(request) {
  return NextResponse.json("hello world");
}
