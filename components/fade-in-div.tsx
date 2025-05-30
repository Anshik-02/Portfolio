
'use client';

import { motion } from 'framer-motion';

export default function FadeInDiv() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-6 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-2">Animated Card</h2>
      <p>This card fades in and moves up on load!</p>
    </motion.div>
  );
}
