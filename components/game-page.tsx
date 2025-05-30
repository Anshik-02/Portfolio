'use client';

import DropDown from '@/components/dropdown';
import {  X} from 'lucide-react';

import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from './theme-context';

const PhaserGame = dynamic(() => import('@/src/game/components/phaser-game'), {
  ssr: false,
});

export default function GamePage() {
 const [activeModal, setActiveModal] = useState(null);

const [showModel,setShowModel]=useState(false)
 const iframeRef = useRef(null); 
  const { theme } = useTheme();

  useEffect(() => {
    //@ts-ignore
    if (iframeRef.current && iframeRef.current.contentWindow) {
    //@ts-ignore
      iframeRef.current.contentWindow.postMessage({ theme }, '*');
    }
  }, [theme]);



useEffect(() => {
  const handler = (e:any) => {
    setActiveModal(e.detail);
    setShowModel(true)
  };

  window.addEventListener('show-section', handler);

  return () => {
    window.removeEventListener('show-section', handler);
  };
}, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      

        <DropDown/>
      <PhaserGame />

      {activeModal && showModel  && (
        <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center`}>
          <div className="p-1 lg:p-5 bg-white rounded-lg w-4/5 h-4/5 overflow-hidden">
            <iframe  ref={iframeRef}  src={`/project-embed/${activeModal}`} className='w-full h-full rounded '></iframe>
            <button
              onClick={() => setShowModel(false)}
              className="px-4 py-2 absolute lg:!top-26 md:top-12 top-26  text-foreground rounded">
             <X className='h-8 w-8 '/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
