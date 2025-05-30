'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/particleBackground';


export default function Home() {
  const router = useRouter();

  const onclick1 = () => router.push("/minimal");
  const onclick2 = () => router.push("/game");

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4">
  <ParticlesBackground/>
  <div className="flex flex-col gap-y-7 border border-white/20 bg-white/5 p-10 sm:p-20 rounded-2xl backdrop-blur-md shadow-xl w-full max-w-md">
    <Button
      onClick={onclick1}
      size="xl"
      variant="default"
      className="bg-white/10 hover:bg-white/20 text-white font-semibold cursor-pointer text-lg sm:text-xl py-6 rounded-lg transition-all duration-300"
    >
      Quick Overview
    </Button>

    <Button
      onClick={onclick2}
      size="xl"
      variant="default"
      className="bg-[#1a1a1a]/80 hover:bg-[#333]/90 text-white font-bold  cursor-pointer py-6 rounded-lg transition-all duration-300"
    >
      <p style={{ fontFamily: 'Press_Start_P2' }}>Play pixel mode</p>
    </Button>
  </div>
</div>
  );
}
