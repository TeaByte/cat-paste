import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const langs = [
  "plain",
  "javascript",
  "python",
  "rust",
  "lua",
  "clike",
  "html",
  "css",
  "markup",
  "svg",
  "xml",
];
