"use client"

import CardComponent2 from '@/components/card-component2'
import ProjectPage from '@/components/project-page'
import React from 'react'

export default function Projects() {
  return (
  
    <div>
      <div className="flex items-center !justify-center bg-[#FFEDD5] text-[#7C2D12] flex-col ">
        <div>
          <h2 className="text-5xl md:ml-0 ml-3 font-bold mt-12">My Projects</h2>
          <p className="text-lg text-[#7C2D12]/45 md:ml-0 ml-3 mt-3 leading-relaxed max-w-[850px]">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
          <CardComponent2 />
        </div>
      </div>
    </div>
)
}
