"use client"
import AboutMe from "@/components/aboutme-page";
import { motion } from 'framer-motion';
import React from "react";

export default function MinimalPage() {
  return <motion.div
      initial={{ x: '-100%' }}  
      animate={{ x: 0 }}        
      transition={{ duration: .3, ease: 'easeInOut' }}
      className="w-full h-full"
    >
  <AboutMe />;
    </motion.div>


}
