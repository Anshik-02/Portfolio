

import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Map() {

 return (

  <Main/>

 )
}

function Main(){

  return (
  <div>
      <div className="text-[#7C2D12] bg-[#FFEDD5]  flex justify-between flex-col items-center">
        <div className="flex md:gap-140 !items-center mt-12">
          <h1 className="md:text-5xl text-4xl font-bold">Map</h1>
        </div>
        <div className="mt-5 mb-5 rounded-xs">
               <Image src={"/map.png"} alt='city-map' className='' width={700} height={400}/>
        </div>
      </div>
    </div> 
  )
}