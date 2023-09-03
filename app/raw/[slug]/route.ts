import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface Props {
  params: { slug: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const paste = await prisma.paste.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (paste) {
    return new NextResponse(paste.text, {
      status: 200,
      headers: {
        "content-type": "text/plain",
      },
    });
  }
  return new NextResponse("Not Found!.", {
    status: 404,
    headers: {
      "content-type": "text/plain",
    },
  });
}
