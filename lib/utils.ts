import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const langs = [
  "No Highlight",
  "C",
  "C#",
  "C++",
  "C-like",
  "CSS",
  "Clojure",
  "CoffeeScript",
  "Dart",
  "Docker",
  "Elixir",
  "Excel Formula",
  "F#",
  "Go",
  "HTML",
  "Haskell",
  "JSON",
  "Java",
  "JavaScript",
  "Jinja",
  "Lua",
  "Markup",
  "OCaml",
  "Objective-C",
  "PHP",
  "Perl",
  "Python",
  "R",
  "React JSX",
  "React TSX",
  "Ruby",
  "Rust",
  "SQL",
  "Swift",
  "TypeScript",
  "VB.Net",
  "WebAssembly",
  "YAML",
  "Zig",
];
