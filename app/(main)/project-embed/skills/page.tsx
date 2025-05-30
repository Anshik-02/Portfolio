"use client"
import { Badge } from '@/components/ui/badge';
import {
  Gamepad2,
  GitBranch,
  Palette,
  Laptop,
  Server,
  Database,
  Paintbrush,
  Github,
  Figma,
  Code2,
  TerminalSquare,
  Triangle,
  Languages,
  Code,
  Plus,
  Plug,
  Atom,
} from 'lucide-react';
import React, { useEffect } from 'react';





export default function Skills() {
  return (
    <div className=' bg-[#FFEDD5]'>  
        <Main/>
 </div>
  )
}




function Main(){

  const skills = [
    { icon: <Code2 className="!w-10 !h-10" />, label: 'JavaScript' },
    { icon: <Atom className="!w-10 !h-10" />, label: 'React.js' },
    { icon: <Triangle className="!w-10 !h-10" />, label: 'Next.js' },
    { icon: <Gamepad2 className="!w-10 !h-10" />, label: 'Phaser.js' },
    { icon: <GitBranch className="!w-10 !h-10" />, label: 'Git' },
    { icon: <Github className="!w-10 !h-10" />, label: 'GitHub' },
    { icon: <Paintbrush className="!w-10 !h-10" />, label: 'Photoshop' },
    { icon: <Palette className="!w-10 !h-10" />, label: 'Figma' },
    { icon: <Database className="!w-10 !h-10" />, label: 'PostgreSQL' },
    { icon: <Database className="!w-10 !h-10" />, label: 'MongoDB' },
    { icon: <Database className="!w-10 !h-10" />, label: 'Redis' },
    { icon: <TerminalSquare className="!w-10 !h-10" />, label: 'Node.js' },
    { icon: <Languages className="!w-10 !h-10" />, label: '日本語 N4' },
    { icon: <Code className="!w-10 !h-10" />, label: 'Express' },
    { icon: <Plus className="!w-10 !h-10" />, label: 'Shadcn' },
    { icon: <Plug className="!w-10 !h-10" />, label: 'WebSockets' },
  ];
  
  return (<div className=''><p className="text-3xl  md:text-5xl font-semibold text-[#7C2D12] text-center  mb-6">Skills & Technologies</p>

    <div className=" py-8 flex items-center justify-center  ">
      
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-5 md:grid-cols-4 ">
        {skills.map((skill) => (
          <Badge
            key={skill.label}
            className="flex flex-col md:h-30 md:w-40 h-20 w-22 items-center justify-center gap-2 py-4 px-2 bg-transparent border border-neutral-400 text-[#7C2D12]/80 rounded-xl"
          >
            {skill.icon}
            <span className="text-sm font-medium">{skill.label}</span>
          </Badge>
        ))}
      </div>
    </div>
    </div>
  );
}