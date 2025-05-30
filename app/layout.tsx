import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google'
import { Pixelify_Sans } from 'next/font/google';
import "./globals.css";
import ParticlesBackground from "@/components/particleBackground";

const pixelify = Pixelify_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'],
  display: 'swap', 
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshik's Portfolio",
  description: "Anshik's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${pixelify.className} antialiased`}>
            {children}
         
      </body>
    </html>
  );
}

