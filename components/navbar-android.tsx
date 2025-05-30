"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Palette } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function Navbar2({theme,setTheme}:any) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const themes = [
    { id: "theme-dark", label: "Dark" },
    { id: "theme-light", label: "Light" },
    { id: "theme-pink", label: "Pink" },
    { id: "theme-ember", label: "Ember" },
    { id: "theme-sunset", label: "Orange" },
  ];
  return (
    <div className="!sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/4 lg:!hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/minimal" className="text-3xl font-bold text-foreground">
          Anshik
        </Link>

        <div className="flex items-center ">
          <Select value={theme} onValueChange={(value) => setTheme(value)}>
            <SelectTrigger className=" flex items-center w-17    text-foreground bg-transparent border-foreground">
              <Palette className="text-foreground  py-1 !w-7 !h-7" />
            </SelectTrigger>
            <SelectContent>
              {themes.map(({ id, label }) => (
                <SelectItem key={id} value={id}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4">
         <Link
            href={"/minimal/history"}
            className={cn(
              "text-lg text-foreground/80 hover:text-foreground",
              pathname === "/minimal/history" && "font-bold text-foreground border-b-4 border-foreground/80" 
            )}
          >
            History
          </Link>
          <Link href="/minimal/projects"    className={cn(
              "text-lg text-foreground/80 hover:text-foreground",
              pathname === "/minimal/projects" && "font-bold text-foreground border-b-4 border-foreground/80" 
            )}>
            Projects
          </Link>
          <Link href="/minimal/resume"    className={cn(
              "text-lg text-foreground/80 hover:text-foreground",
              pathname === "/minimal/resume" && "font-bold text-foreground border-b-4 border-foreground/80" 
            )}>
            Resume
          </Link>
          <Link href="/minimal/connect"    className={cn(
              "text-lg text-foreground/80 hover:text-foreground",
              pathname === "/minimal/connect" && "font-bold text-foreground border-b-4 border-foreground/80" 
            )}>
            Connect
          </Link>
          <Link href={"/game"} className="text-2xl text-foreground">
            <Button
              className="bg-transparent text-foreground border-1 text-lg hover:text-[#0C1220] cursor-pointer"
              variant={"secondary"}
            >
              Enter Pixel world
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
