import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const data = await request.json();
  let { text, syntax } = data;
  if (!syntax && !text) {
    return NextResponse.json({
      message: "Not all fields are filled.",
    });
  }
  syntax = syntax.toLowerCase();

  if ((text as string).length > 2000) {
    return NextResponse.json({
      message: "Text too long.",
    });
  }

  try {
    const deleteToken = uuidv4();
    const paste = await prisma.paste.create({
      data: {
        text: text as string,
        syntax: syntax as string,
        delete: deleteToken,
      },
    });
    return NextResponse.json({
      message: `${paste.id} Pasted successfully.`,
      token: deleteToken,
      id: paste.id,
    });
  } catch (e) {
    return NextResponse.json({
      message: "Error while creating paste.",
    });
  }
}
