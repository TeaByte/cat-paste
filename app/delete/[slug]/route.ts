import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface Props {
  params: { slug: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const paste = await prisma.paste.delete({
      where: {
        delete: params.slug,
      },
    });
    return NextResponse.json({
      message: `${paste.id} deleted successfully.`,
    });
  } catch {
    return NextResponse.json({
      message: "Already deleted or not found.",
    });
  }
}
