"use client";

import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { langs } from "@/lib/utils";

const syntaxs = langs.map((lang) => ({
  value: lang.toLowerCase(),
  label: lang,
}));

interface ComboBoxProps {
  value: string;
  selectSyntax: (selectedValue: string) => void;
}

export function ComboBox({ value, selectSyntax }: ComboBoxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? syntaxs.find((syntax) => syntax.value === value)?.label
            : "Syntax"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search syntax..." className="h-9" />
          <CommandEmpty>No Syntax found.</CommandEmpty>
          <CommandGroup className="max-h-[200px] overflow-y-scroll">
            {syntaxs.map((syntax) => (
              <CommandItem
                key={syntax.value}
                onSelect={(currentValue) => {
                  selectSyntax(currentValue);
                  setOpen(!open);
                }}
              >
                {syntax.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === syntax.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
