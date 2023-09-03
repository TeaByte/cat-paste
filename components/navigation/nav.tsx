import Image from "next/image";
import Link from "next/link";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "../ui/button";

export default function Nav() {
  return (
    <nav>
      <ul className="flex py-2 pt-3 px-5 justify-between items-center">
        <li>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src="/cat.png"
              width={100}
              height={100}
              className="w-11 h-11 rounded-full"
              alt="logo"
            />
            <p className="hidden md:block">Cat Paste</p>
          </Link>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <Link href={"/pastes"}>
              <Button className="flex gap-2 items-center">
                <span>Other Pastes</span>
                <OpenInNewWindowIcon />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </li>
      </ul>
      <Separator />
    </nav>
  );
}
