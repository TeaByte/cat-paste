export const revalidate = 1;

import { Share2Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Pastes() {
  const pastes = await prisma.paste.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return (
    <main className="flex flex-col items-center justify-between p-5">
      <div className="flex flex-col w-full md:w-1/2">
        <Link href="/">
          <Button
            variant={"outline"}
            className="w-full flex items-center gap-1"
          >
            <span>Share a paste</span>
            <Share2Icon className="w-4 h-4" />
          </Button>
        </Link>
        <section className="pt-6 flex flex-col gap-3">
          {pastes.map((paste) => (
            <Link href={`/paste/${paste.id}`} key={paste.id}>
              <div className="rounded-sm p-4 border-primary border-[1px] flex justify-between hover:scale-105">
                <span className="truncate max-w-[100px] md:max-w-[200px] capitalize">
                  {paste.text}
                </span>
                <span className="truncate max-w-[100px] md:max-w-[200px] capitalize">
                  ( {paste.syntax} )
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
