"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";


export default function ResumePage() {
 useEffect(() => {
      const handler = (event: MessageEvent) => {
        if (event.data.theme) {
          document.body.classList.remove(
            'theme-dark',
            'theme-light',
            'theme-pink',
            'theme-ember',
            'theme-sunset'
          );
          document.body.classList.add(event.data.theme);
        }
      };
  
      window.addEventListener('message', handler);
  
      // Clean up on unmount
      return () => {
        window.removeEventListener('message', handler);
      };
    }, []);
  return (
        <div>
      <div className="text-foreground  mt-12 flex justify-between flex-col items-center">
        <div className="flex md:gap-140 !items-center">
          <h1 className="md:text-5xl text-4xl font-bold">My Resume</h1>
          <div className="hidden md:!block"><a href={"/resume.pdf"}><Button className='border-foreground text-foreground'  variant={"secondary"}>Download <Download/></Button></a></div>
        </div>
        <div className="mt-5 mb-5 rounded-xs">
          <Image src={"/resume.png"} alt="resume" width={700} height={400} ></Image>
        </div>
      </div>
    </div>
  )
}
