"use client"
import ConnectPage from "@/components/connect-page";
import { motion } from 'framer-motion';

export default function Connect() {
  return (
     <motion.div
      initial={{ x: '-100%' }}  
      animate={{ x: 0 }}        
      transition={{ duration: .3, ease: 'easeInOut' }}
      className="w-full h-full"
    >
   <ConnectPage/>
    </motion.div>
  );
}
