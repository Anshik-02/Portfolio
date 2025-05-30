"use client"
import ResumePage from "@/components/resume-page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Resume() {
  return (
  <div>
      <div className="text-[#7C2D12] bg-[#FFEDD5]   flex justify-between flex-col items-center">
        <div className="flex md:gap-140 !items-center !mt-12 ">
          <h1 className="md:text-5xl text-4xl font-bold">My Resume</h1>
          <div className="hidden md:!block"><a href={"/resume.pdf"}><Button className='border-[#7C2D12] text-[#7C2D12]'  variant={"secondary"}>Download <Download/></Button></a></div>
        </div>
        <div className="mt-5 mb-5 rounded-xs">
          <Image src={"/resume.png"} alt="resume" width={700} height={400} ></Image>
        </div>
      </div>
    </div>
  );
}
