import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-background z-50">
      <Separator />
      <ul className="flex py-2 pt-3 px-5 justify-center items-center">
        <li>
          <strong>Made with 💚 by @TeaByte</strong>
        </li>
      </ul>
    </footer>
  );
}
