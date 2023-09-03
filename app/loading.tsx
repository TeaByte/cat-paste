import { ReloadIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <main className="flex flex-col gap-3 items-center justify-between p-16">
      <ReloadIcon className="h-20 w-20 animate-spin" />
      <p>Loading...</p>
    </main>
  );
}
