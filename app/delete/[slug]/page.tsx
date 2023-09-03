import { prisma } from "@/lib/prisma";
import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

interface Props {
  params: { slug: string };
}

export default async function DeletePage({ params }: Props) {
  try {
    const paste = await prisma.paste.delete({
      where: {
        delete: params.slug,
      },
    });
    return (
      <main className="flex flex-col gap-3 items-center justify-between p-16">
        <CheckCircledIcon className="h-20 w-20" />
        <p>{`${paste.id} deleted successfully.`}</p>
      </main>
    );
  } catch {
    return (
      <main className="flex flex-col gap-3 items-center justify-between p-16">
        <ExclamationTriangleIcon className="h-20 w-20" />
        <p>Already deleted or not found.</p>
      </main>
    );
  }
}
