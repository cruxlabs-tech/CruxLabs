import OrbitingCircles from './orbiting-circle';

export function Orbit() {
  return (
    <div className=" orbit relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-100">
        Astro Genesis
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border bg-slate-200"
        duration={20}
        delay={20}
        radius={80}
      >
        <img src="/Postgres.png" alt="logo" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        {' '}
        <img src="/wordpress.png" alt="logo" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <img src="/nodejs.png" alt="logo" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <img src="/react.png" alt="logo" />
      </OrbitingCircles>
    </div>
  );
}
