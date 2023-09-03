import { FileTextIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

import { Button } from "@/components/ui/button";
import Code from "@/components/highlight/code";

interface Props {
  params: { slug: string };
}

export default async function PastePage({ params }: Props) {
  const paste = await prisma.paste.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (paste)
    return (
      <main className="flex flex-col items-center justify-between p-5 line-numbers">
        <div className="w-full">
          <Link href={"/raw/" + params.slug}>
            <Button
              className="w-full md:w-72 flex items-center gap-1"
              aria-expanded={true}
            >
              <span>Raw</span>
              <FileTextIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <Code syntax={paste.syntax} text={paste.text} />
      </main>
    );

  return <div></div>;
}
