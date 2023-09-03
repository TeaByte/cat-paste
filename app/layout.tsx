import "./globals.css";

import Nav from "@/components/navigation/nav";
import Ad from "@/components/ads/ad";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Paste",
  description:
    "CatPaste is a user-friendly online platform that allows individuals to easily and securely share and store text-based information, code snippets, and notes. Similar in concept to the popular Pastebin service, CatPaste offers a simple and efficient way to create, manage, and share text-based content with others. Whether you're a developer looking to share code snippets, a student collaborating on a project, or anyone in need of a convenient text-sharing solution, CatPaste is designed to simplify the process. With its clean and intuitive interface, users can quickly paste, share, and access text-based content, making it an indispensable tool for the digital age.",
  keywords: [
    "Text sharing",
    "Code sharing",
    "Paste tool",
    "Collaborative notes",
    "Secure sharing",
    "Text storage",
    "Content management",
    "Data sharing",
    "Online clipboard",
    "Information sharing",
    "Note collaboration",
    "Code repository",
    "Text collaboration",
    "Document sharing",
    "Text hosting",
    "Code storage",
    "Collaborative text",
    "Note hosting",
    "Text repository",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Nav />
          {children}
          <Ad />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
