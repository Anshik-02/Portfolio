"use client"
import ResumePage from "@/components/resume-page";
import { ThemeProvider } from "@/components/theme-context";
import React from "react";

export default function Resume() {
  return (
<ThemeProvider>
  <ResumePage/>
  </ThemeProvider>

  );
}
