"use client";

import TypedText from "@/components/Typed-text";
import { Button } from "@/components/ui/button";
import { Github} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React  from "react";

export default function MinimalPage() {
  return <Main />;
}

function Main() {
  return (
    <div className="bg-[#FFEDD5] w-full min-h-[550px] overflow-hidden">
      {" "}
      <div className="mt-5 text-[#7C2D12] px-5  ">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-20 gap-8 ">
          <div className="text-center lg:text-left">
            <p className="font-bold text-5xl md:text-5xl mb-4">
              {" "}
              <TypedText
                strings={[
                  "HEY, I’m Anshik",
                  "I build full-stack projects.",
                  "こんにちは、私 は アンシクです",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </p>
            <p className="font-medium leading-8 max-w-xl text-muted-foreground text-xl mx-auto lg:mx-0">
              I’m a full stack web developer who loves turning ideas into clean,
              functional websites and apps. Right now, I’m diving into DevOps,
              exploring the magic behind smooth deployments and scalable
              systems. On the side, I’ve got a soft spot for game development —
              and while I’m not there just yet, I’m definitely headed that way.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <Link href={"/minimal/connect"}>
                {" "}
              
              </Link>
              
                <a href="https://github.com/Anshik-02"><Button
                  variant="secondary"
                  className="text-[#7C2D12]/80 text-md bg-transparent hover:brightness-75 hover:text-[#020817] border-2"
                >
                  <Github className="mr-2" />
             
                  Github
                </Button> </a>
            </div>
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="/anshik.jpg"
              alt="Anshik"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
