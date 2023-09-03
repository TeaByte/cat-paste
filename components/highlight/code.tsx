"use client";

import Prism from "prismjs";
import { useEffect } from "react";

import { FileTextIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
interface Props {
  text: string;
  syntax: string;
  slug: string;
}

export default function Code({ text, syntax, slug }: Props) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);

  return (
    <>
      <div className="w-full flex gap-2">
        <a target="_blank" href={"/raw/" + slug}>
          <Button
            className="w-full md:w-72 flex items-center gap-1"
            aria-expanded={true}
          >
            <span>Raw</span>
            <FileTextIcon className="w-4 h-4" />
          </Button>
        </a>
        <Button
          className="w-full md:w-72 flex items-center gap-1"
          aria-expanded={true}
          onClick={() => navigator.clipboard.writeText(text)}
        >
          <span>Copy </span>
          <ClipboardCopyIcon className="w-4 h-4" />
        </Button>
      </div>
      <pre className="w-full rounded-sm">
        <code className={"language-" + syntax}>{text}</code>
      </pre>
    </>
  );
}
