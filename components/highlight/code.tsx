"use client";

import Prism from "prismjs";
import { useEffect } from "react";

interface Props {
  text: string;
  syntax: string;
}

export default function Code({ text, syntax }: Props) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);

  return (
    <pre className="w-full rounded-sm">
      <code className={"language-" + syntax}>{text}</code>
    </pre>
  );
}
