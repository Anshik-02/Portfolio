"use client"
import { ThemeProvider} from '@/components/theme-context';
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Map() {

 return (
  <ThemeProvider>
  <Main/>
  </ThemeProvider>
 )
}

function Main(){
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.theme) {
        document.body.classList.remove(
          'theme-dark',
          'theme-light',
          'theme-pink',
          'theme-ember',
          'theme-sunset'
        );
        document.body.classList.add(event.data.theme);
      }
    };

    window.addEventListener('message', handler);

    // Clean up on unmount
    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);
  return (
  <div>
      <div className="text-foreground mt-12 flex justify-between flex-col items-center">
        <div className="flex md:gap-140 !items-center">
          <h1 className="md:text-5xl text-4xl font-bold">Map</h1>
        </div>
        <div className="mt-5 mb-5 rounded-xs">
               <Image src={"/map.png"} alt='city-map' className='' width={700} height={400}/>
        </div>
      </div>
    </div> 
  )
}