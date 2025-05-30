"use client"
import ConnectPage from "@/components/connect-page";
import { ThemeProvider } from "@/components/theme-context";
export default function Connect() {
  return (
    <ThemeProvider>
   <ConnectPage/>
   </ThemeProvider>
  );
}
