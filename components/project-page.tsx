import React, { useEffect } from 'react';
import CardComponent from '@/components/card-component';


export default function ProjectPage() {
  return (
    <div>
      <div className="flex items-center !justify-center text-foreground flex-col mt-12">
        <div>
          <h2 className="text-5xl md:ml-0 ml-3 font-bold">My Projects</h2>
          <p className="text-lg text-foreground/45 md:ml-0 ml-3 mt-3 leading-relaxed max-w-[850px]">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
