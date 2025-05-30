
'use client';

import { useEffect, useRef } from 'react';
import { Game } from 'phaser';
import config from '../config';

let game: Game | null = null;

const PhaserGame = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameRef.current && !game) {
      config.parent = gameRef.current;
      game = new Game(config);
    }

    return () => {
      game?.destroy(true);
      game = null;
    };
  }, []);

  return <div ref={gameRef} className="w-full h-full" />;
};

export default PhaserGame;
