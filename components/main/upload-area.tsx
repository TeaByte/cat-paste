"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { Share2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { ComboBox } from "@/components/main/combo-box";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ParentComponent() {
  const { toast } = useToast();
  const [syntax, setSyntax] = useState("");
  const [text, setText] = useState("");

  const [deleteURL, setDeleteURL] = useState("");
  const [refURL, setRefURL] = useState("");

  const [copyButtonMessage, setCopyButtonMessage] = useState("⚠️ Delete URL");
  const [copyPasteButtonMessage, setCopyPasteButtonMessage] =
    useState("📝 Paste URL");

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const selectSyntax = (selectedValue: string) => {
    setSyntax(selectedValue);
  };

  function copyURL() {
    navigator.clipboard.writeText(deleteURL);
    setCopyButtonMessage("Copied!");
  }

  function copyPasteURL() {
    navigator.clipboard.writeText(
      `https://cat-paste.vercel.app/paste/${refURL}`
    );
    setCopyPasteButtonMessage("Copied!");
  }

  function onRef() {
    router.push(`/paste/${refURL}`);
  }

  const onError = () => {
    setIsSuccess(false);
    setIsError(true);
  };

  const onSuccess = () => {
    setIsSuccess(true);
    setIsError(false);
  };

  async function handleSubmit() {
    if (syntax === "") {
      onError();
      toast({
        variant: "destructive",
        title: "Select a syntax.",
        description: "You must select a syntax before submitting.",
      });
    } else if (text.length > 2000) {
      onError();
      toast({
        variant: "destructive",
        title: "Text too long.",
        description: "Try a shorter text.",
      });
    } else if (text.length < 10) {
      onError();
      toast({
        variant: "destructive",
        title: "Text too short.",
        description: "Try a longer text.",
      });
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/paste", {
          method: "POST",
          body: JSON.stringify({ text, syntax }),
        });
        const data = await response.json();
        const token = data.token;
        const id = data.id;
        if (token && id) {
          setDeleteURL(`https://cat-paste.vercel.app/delete/${token}`);
          setRefURL(`${id}`);
          toast({
            title: "Your paste pasted successfully.",
            description: "Don't forget to copy the delete URL.",
          });
          onSuccess();
        } else {
          onError();
          toast({
            title: "Error while getting token.",
            description: "Contact support.",
          });
        }
      } catch {
        onError();
        toast({
          title: "Error while submitting.",
          description: "Contact support.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="w-full">
      <div className="py-2 flex gap-2">
        <ComboBox value={syntax} selectSyntax={selectSyntax} />
        {isLoading ? (
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </Button>
        ) : (
          <Button
            className={
              "w-full md:w-72 flex items-center gap-1 " +
              (isError ? "bg-red-500 text-white hover:bg-red-400" : "")
            }
            aria-expanded={true}
            onClick={handleSubmit}
          >
            <span>Share a paste</span>
            <Share2Icon className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div
        className={
          (isSuccess ? "block" : "hidden") +
          " p-4 border-primary border-[1px] mb-2 rounded-sm flex flex-col gap-2 items-center justify-center"
        }
      >
        <div>
          <p className="text-center">Your paste pasted successfully. 🎉</p>
          <p className="text-center">Save your delete URL ⚠️</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button onClick={copyURL}>{copyButtonMessage}</Button>
            <Button onClick={copyPasteURL}>{copyPasteButtonMessage}</Button>
          </div>
          <Button onClick={onRef}>↗️ Go to paste </Button>
        </div>
      </div>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Code goes here..."
        className="h-[424px]"
      />
    </div>
  );
}
