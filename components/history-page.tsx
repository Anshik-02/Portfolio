"use client"
import React, { useEffect } from 'react'
export default function HistoryPage() {

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
    <div className="text-foreground/90 flex justify-center items-center mt-12 flex-col">
      <div className="text-start max-w-2xl">
        <p className=" text-3xl md:ml-0 ml-4  md:text-5xl font-bold">Brief About Myself and My College</p>
        <p className="text-lg md:ml-0 ml-4 text-foreground/45 mt-3 leading-relaxed">
          My journey as a developer, education, and significant milestones.
        </p>
      </div>

      <div className="text-start w-full max-w-2xl mt-13">
        <p className="text-2xl  font-bold md:ml-1 ml-4">Education</p>
        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-semibold  mt-4 ml-5">Diploma in Computer Science</p>
          <p className="text-md text-foreground/50 mt-2 ml-5">
            G.B.N Polytechnic Nilokheri,Karnal  (2021-2024)
          </p>

          <p className="text-2xl font-semibold  mt-8 ml-5">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-md text-foreground/50 mt-2 ml-5 mb-5">
            S.I.E.T Nilokheri,Karnal   (2024-2027)
          </p>
        </div>
      </div>
      
      <div className="text-start w-full max-w-2xl mt-13">
        <p className="text-2xl ml-1 font-bold">Work & Learnings</p>
        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-semibold  mt-4 ml-5">Web Developer</p>
          <p className="text-md text-foreground/50 mt-2 ml-5">
            Self Learning (2024-Present)
          </p>

          <p className="text-xl text-foreground/70 font-light mt-5 mb-5 ml-5">
           - Mern Stack<br/>
           - Next.js<br/>
           - Dev Ops
          </p>
        
        </div>
        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-semibold  mt-4 ml-5">Designer</p>
          <p className="text-md  text-foreground/50 mt-2 ml-5">
            Self Learning (2020-Present)
          </p>

          <p className="text-xl text-foreground/70 font-light mt-5 mb-5 ml-5">
          - Photoshop<br/>- Figma
          </p>
        
        </div>
        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-semibold  mt-4 ml-5">Game Developer</p>
          <p className="text-md text-foreground/50 mt-2 ml-5">
            Self Learning (Present)
          </p>
          <p className="text-xl text-foreground/70 font-light mt-5 mb-5 ml-5">
          - Phaser.js<br/>- Tiled
          </p>
        
        </div>

        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-semibold  mt-4 ml-5">Japanese Language</p>
          <p className="text-md text-foreground/50 mb-5 mt-2 ml-5">
            Self Learning (2023-Present)
          </p>
        
        
        </div>
      </div>

      <div className="text-start w-full max-w-2xl mt-13">
        <p className="text-2xl ml-1 font-bold">Certification</p>
        <div className="max-w-[800px] mt-4 rounded-xl border-1 h-auto border-foreground/20">
          <p className="text-2xl font-bold  mt-4 ml-5">JLPT N4</p>
          <p className="text-md text-foreground/50 mt-2 ml-5">
            Japanese Foundation (2024)
          </p>

          <p className="text-2xl font-bold  mt-8 ml-5">
            Python
          </p>
          <p className="text-md text-foreground/50 mt-2 ml-5 mb-5">
            N.I.E.L.E.T Umri, kurukshetra (2023)
          </p>
        </div>
      </div>
    </div>
  )
}
