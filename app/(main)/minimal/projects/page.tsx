"use client"
import ProjectPage from '@/components/project-page'
import React from 'react'
import { motion } from 'framer-motion';


export default function Projects() {
  return (
<motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}       
      transition={{ duration: .3, ease: 'easeInOut' }}
      className="w-full h-full"
    >

<ProjectPage/>

    </motion.div>
)
}
