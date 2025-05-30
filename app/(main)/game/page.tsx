'use client';

import GamePage from '@/components/game-page';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 


export default function MainPage() {
  const [showGame, setShowGame] = useState(false);

  return (
    <AnimatePresence>
      {!showGame ? (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-screen h-screen flex items-center justify-center !overflow-hidden bg-black"
        >
          <div className="text-center !overflow-hidden">
            <h1 className="text-white text-4xl font-bold mb-4">
              Welcome to My Portfolio World
            </h1>
            <p className="text-gray-300 mb-2">
              Please rotate your phone to <span className="font-semibold">landscape</span> for the best experience.🚀🚀
            </p>
            <p className="text-rose-300 mb-8">
              Or use a <span className="font-semibold">Desktop</span> for the ultimate experience.
            </p>
            <button
              onClick={() => setShowGame(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Enter
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="game"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-screen h-screen !overflow-hidden"
        >
          <GamePage/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
