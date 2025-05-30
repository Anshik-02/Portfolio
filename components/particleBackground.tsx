'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    preset: 'links',
    fullScreen: { enable: false },
    background: { color: { value: '#000000' } },
    particles: {
      color: { value: '#ffffff' },
      line_linked: { enable: true, color: '#ffffff' },
    },
  }}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '110%',
    zIndex: -1000,
  }}
/>
    </div>
  );
};

export default ParticlesBackground;
