"use client"
import ResumePage from "@/components/resume-page";
import React from "react";
import { motion } from 'framer-motion';


export default function Resume() {
return (
<motion.div
      initial={{ x: '-100%' }} 
      animate={{ x: 0 }}      
      transition={{ duration: .3, ease: 'easeInOut' }}
      className="w-full h-full"
    >

<ResumePage/>

    </motion.div>

  );
}
