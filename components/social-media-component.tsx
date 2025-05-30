import { Github, Linkedin, MessageSquare, Twitter } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function SocialMediaComponent() {
  const socials = [
    {
      icon: <MessageSquare />,
      title: "Email",
      placeholder: "anshik091@gmail.com",
      btnText: "Send Email",
      link:"mailto:anshik091@gmail.com"
    },
    {
      icon: <Github />,
      title: "GitHub",
      placeholder: "Anshik-02",
      btnText: "View Profile",
      link:"https://github.com/Anshik-02"
    },
    {
      icon: <Twitter />,
      title: "Twitter",
      placeholder: "@Anshik002",
      btnText: "Follow",
      link:"https://x.com/Anshik002"
    },
  ];


  return (
    <div>
      {" "}
      {socials.map((social) => (
        <div className="h-auto w-[350px] flex-col rounded-md mt-5 border flex  border-foreground/20">
          <div key={social.title} className="flex m-8 items-center">
            {social.icon}
            <div className="flex flex-col">
              <p className="ml-8 text-xl font-semibold ">{social.title}</p>
              <p className="text-xs ml-8 text-foreground/40">{social.placeholder}</p>
            </div>
          </div>
          <div
            key={social.btnText}
            className="flex items-center justify-center mb-3"
          >
           <a href={social.link}> <Button className="rounded-xl cursor-pointer w-80 text-foreground bg-transparent hover:text-foreground/30 border-1 border-foreground/20">
              {social.btnText}
            </Button></a>
          </div>
        </div>
      ))}
    </div>
  );
}
