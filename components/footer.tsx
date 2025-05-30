import React from 'react'
import { Badge } from './ui/badge'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <div className='h-18 mt-8 flex md:px-20 px-5 text-foreground/80 items-center justify-between bg-transparent border-t-1 border-solid border-foreground/80'>
<p className='text-xs'> © 2025 Anshik..</p>
<div>
    <a href='https://github.com/Anshik-02'><Badge className='rounded-2xl hover:brightness-75 bg-transparent cursor-pointer'>
        <Github className='!w-6 !h-6 text-foreground'/>
    </Badge></a>
</div>
    </div>
  )
}
