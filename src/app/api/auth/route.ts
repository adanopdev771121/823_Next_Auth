import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  return NextResponse.json({ email, password }, { status: 200 });
}
