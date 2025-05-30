"use client"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Navbar2 from '@/components/navbar-android'
import { ThemeProvider } from '@/components/theme-context'
import React, { useEffect, useState } from 'react'

export default function Layout({children}:{children:React.ReactNode}) {


  return (
    <ThemeProvider>
      <Navbar2 />
        <Navbar />
        {children}
        <Footer/>
  </ThemeProvider>

  )
}
