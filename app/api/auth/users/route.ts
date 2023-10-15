import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import url from "url";
import { ParsedUrlQuery } from "querystring";

interface UrlQuery extends ParsedUrlQuery {
  keyword?: string | undefined;
  select?: "ADMIN" | "USER";
}

export async function POST(req: Request) {
  const newUser = await req.json();
  if (newUser.password) {
    newUser.password = await bcryptjs.hash(newUser.password, 10);
  }
  const user = await client.user.create({ data: newUser });
  return NextResponse.json(user);
}

export async function GET(req: Request) {
  const query: UrlQuery = url.parse(req.url, true).query;
  const users = await client.user.findMany({
    where: {
      name: {
        contains: query.keyword,
      },
      role: {
        equals: query.select ? query.select : undefined,
      },
    },
  });
  return NextResponse.json(users);
}

export async function DELETE(req: Request) {
  const { id }: { id?: string } = await url.parse(req.url, true).query;
  await client.user.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete user succesffully" });
}
