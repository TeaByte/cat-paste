"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "prismjs/components/prism-python";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-css";
import "prismjs/components/prism-lua";

import { useEffect, useState } from "react";
import { FileTextIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  syntax: string;
  slug: string;
}

export default function Code({ text, syntax, slug }: Props) {
  const [copyButtonMessage, setCopyButtonMessage] = useState("Copy");

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
    console.log(Object(Prism.languages));
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopyButtonMessage("Copied!");
  }

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
          onClick={handleCopy}
        >
          <span>{copyButtonMessage}</span>
          <ClipboardCopyIcon className="w-4 h-4" />
        </Button>
      </div>
      <pre className="w-full rounded-sm line-numbers">
        <code className={"language-" + syntax}>{text}</code>
      </pre>
    </>
  );
}
