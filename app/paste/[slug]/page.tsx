import { FileTextIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

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
        <pre className="w-full rounded-sm">
          <code className={"language-" + paste.syntax}>{paste.text}</code>
        </pre>
      </main>
    );

  return <div></div>;
}
