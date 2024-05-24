'use client';
import Link from 'next/link';
import MaxWidthWrapper from '../utils/max-width-wrapper';
import { MoveRight, Send } from 'lucide-react';
import { Orbit } from '../ui/orbit/orbit';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const handleOnchange = () => {};
  return (
    <div className="mt-10 min-h-[calc(100vh-[h-80px])] bg-[#0F172A] py-1">
      <MaxWidthWrapper className="flex flex-col justify-center gap-2 md:grid-cols-2 md:gap-10 lg:grid lg:gap-16   ">
        <div className="p-1">
          <Link
            href="/"
            className=" mx-auto mt-2 flex w-fit gap-3 rounded-lg border border-slate-300 px-4 py-2 text-white hover:bg-slate-600 md:mx-0 "
          >
            Checkout our Solution <MoveRight />
          </Link>
          <div className="text-center md:text-left ">
            <h1 className="mt-7 p-2 text-4xl font-bold  text-white lg:text-7xl ">
              Transforming <span className="text-md text-green-600"> Ideas </span>into
              <span className="text-md text-green-600"> Digital Reality</span>
            </h1>
          </div>
          <div className="spaxe-x-3 mt-4  text-center text-xl text-white md:text-left  ">
            <div className="min-h-10">
              <ReactTyped
                className=" p-3 text-2xl font-bold"
                strings={['Join us on this this existing journey.']}
                typeSpeed={100}
                loop
                loopCount={Infinity}
              />
            </div>
          </div>

          <div className="  my-6 flex w-full items-center justify-center gap-1  lg:justify-start  ">
            <div className=" flex  w-3/4 items-center  justify-center gap-1 rounded-md bg-gray-700 ">
              <Send className=" border-r-[1px]  border-slate-600 px-1 text-green-600 " size={50} />
              <input
                onChange={handleOnchange}
                type="email"
                className=" w-full rounded-md
                  bg-gray-700  p-3 text-white outline-none   placeholder:text-white placeholder:opacity-20  "
                placeholder="Johndoe@gmail.com"
              />
            </div>
          </div>
        </div>
        {/* orbit */}
        <div className=" flex flex-col items-center justify-center ">
          <Orbit />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
