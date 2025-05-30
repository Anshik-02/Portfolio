"use client"
import HistoryPage from "@/components/history-page";
import { ThemeProvider } from "@/components/theme-context";
import React from "react";

export default function History() {
  return (
    <ThemeProvider>
    <HistoryPage/>
    </ThemeProvider>
  );
}
