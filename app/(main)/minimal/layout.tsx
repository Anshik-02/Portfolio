"use client"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Navbar2 from '@/components/navbar-android'

import React, { useEffect } from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  const [theme, setTheme] = React.useState('theme-sunset');

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-pink',"theme-ember","theme-sunset");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Navbar2 theme={theme} setTheme={setTheme}/>
      <Navbar theme={theme} setTheme={setTheme}/>
      {children}
      <Footer/>
      </div>
  )
}
