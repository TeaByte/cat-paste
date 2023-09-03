import { prisma } from "@/lib/prisma";
import Code from "@/components/highlight/code";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

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
        <Code slug={params.slug} syntax={paste.syntax} text={paste.text} />
      </main>
    );

  return (
    <main className="flex flex-col gap-3 items-center justify-between p-16">
      <ExclamationTriangleIcon className="h-20 w-20" />
      <p>No Paste Found At This URL</p>
    </main>
  );
}
