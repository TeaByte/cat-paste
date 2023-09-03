import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "../ui/button";

export default function Ad() {
  return (
    <section className="flex justify-center p-4">
      <a href="https://catdns.in" target="_blank">
        <Image
          src="/catdns.gif"
          className="rounded-sm"
          width={500}
          height={500}
          alt="CatDNS AD"
        />
      </a>
    </section>
  );
}
