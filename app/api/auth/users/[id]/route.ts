import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const user = await client.user.findUnique({ where: { id: id } });
  return NextResponse.json(user);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const UpdateUser = await req.json();
  if (UpdateUser.password) {
    UpdateUser.password = await bcrypt.hash(UpdateUser.password, 10);
  }
  await client.user.update({ where: { id: id }, data: UpdateUser });
  return NextResponse.json({ message: "update user successfully" });
}
