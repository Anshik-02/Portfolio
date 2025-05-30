"use client";
import Link from "next/link";
import React from "react";
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
import { useTheme } from "./theme-context";

export default function Navbar() {
  const pathname = usePathname();
  const {theme,setTheme}=useTheme()
  const themes = [
    { id: "theme-dark", label: "Dark" },
    { id: "theme-light", label: "Light" },
    { id: "theme-pink", label: "Pink" },
    { id: "theme-ember", label: "Ember" },
    { id: "theme-sunset", label: "Orange" },
  ];

  return (
    <div className="hidden lg:!block sticky top-0 z-40 w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/4">
      <div className="flex mx-auto items-center justify-between px-25">
        <Link
          href={"/minimal"}
          className="text-5xl my-1 font-bold text-foreground py-4  transition-all duration-300 ease-in-out"
        >
          Anshik
        </Link>
        <div className="gap-x-12 flex">
          <Link
            href={"/minimal/history"}
            className={cn(
              "text-2xl text-foreground/80 hover:text-foreground",
              pathname === "/minimal/history" &&
                "font-bold text-foreground border-b-4 border-foreground/80"
            )}
          >
            History
          </Link>
          <Link
            href={"/minimal/projects"}
            className={cn(
              "text-2xl text-foreground/80 hover:text-foreground",
              pathname === "/minimal/projects" &&
                "font-bold text-foreground border-b-4 border-foreground/80"
            )}
          >
            Projects
          </Link>
          <Link
            href={"/minimal/resume"}
            className={cn(
              "text-2xl text-foreground/80 hover:text-foreground",
              pathname === "/minimal/resume" &&
                "font-bold text-foreground border-b-4 border-foreground/80"
            )}
          >
            Resume
          </Link>
          <Link
            href={"/minimal/connect"}
            className={cn(
              "text-2xl text-foreground/80 hover:text-foreground",
              pathname === "/minimal/connect" &&
                "font-bold text-foreground border-b-4 border-foreground/80"
            )}
          >
            Connect
          </Link>
          <div className="flex items-center gap-x-2">
            <Link href={"/game"} className="text-2xl text-foreground">
              <Button
                className="bg-transparent text-foreground border-1 text-lg hover:text-[#0C1220] cursor-pointer"
                variant={"secondary"}
              >
                Enter Pixel world
              </Button>
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
