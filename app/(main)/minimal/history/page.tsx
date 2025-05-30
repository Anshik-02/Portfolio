"use client"
import HistoryPage from "@/components/history-page";
import React from "react";
import { motion } from 'framer-motion';


export default function History() {
  return (
    <motion.div
      initial={{ x: '-100%' }} 
      animate={{ x: 0 }}       
      transition={{ duration: .3, ease: 'easeInOut' }}
      className="w-full h-full"
    >

    <HistoryPage/>

    </motion.div>
  );
}
