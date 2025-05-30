"use client"
import ProjectPage from '@/components/project-page'
import { ThemeProvider } from '@/components/theme-context'
import React from 'react'

export default function Projects() {
  return (
    <ThemeProvider>
<ProjectPage/>
</ThemeProvider>
)
}
