'use client';
import { nodejsImage, postgresqlImage, reactImage, wordpressImage } from '@/lib/constants';
import OrbitingCircles from './orbiting-circle';

export function Orbit() {
  return (
    <section className="relative mx-auto flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-100">
        Astro Genesis
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-8 border bg-slate-200" duration={20} delay={20} radius={80}>
        <img src={postgresqlImage} alt="logo" />
      </OrbitingCircles>
      <OrbitingCircles className="size-8 border-none" duration={20} delay={10} radius={80}>
        <img src={wordpressImage} alt="logo" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles className="size-12 border-none" reverse radius={190} duration={20}>
        <img src={nodejsImage} alt="logo" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-12 border-none"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <img src={reactImage} alt="logo" />
      </OrbitingCircles>
    </section>
  );
}
