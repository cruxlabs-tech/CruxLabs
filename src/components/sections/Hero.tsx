'use client';
import Link from 'next/link';
import MaxWidthWrapper from '../utils/max-width-wrapper';
import { MoveRight, Send } from 'lucide-react';
import { Orbit } from '../ui/orbit/orbit';

const Hero = () => {
  const handleOnchange = () => {};
  return (
    <div className=" bg-[#0F172A] py-10">
      <MaxWidthWrapper className="flex flex-col justify-center gap-2 md:grid-cols-2 md:gap-10 lg:grid lg:gap-16   ">
        <div className=" p-2 ">
          <Link
            href="/"
            className=" mx-auto mt-5 flex w-fit gap-3 rounded-lg border border-slate-300 px-4 py-2 text-white hover:bg-slate-600 md:mx-0 "
          >
            CheckOut our Solution <MoveRight />
          </Link>
          <div className="text-center md:text-left ">
            <h1 className="mt-7 text-5xl font-bold  text-white lg:text-7xl ">
              Your Ecommerce Suite Partner
            </h1>
          </div>
          <h1 className="mt-4 text-center text-xl text-white md:text-left  ">
            Take the opportunity to elevate your business to new heights with our futuristic
            ecommerce platforms and AI-powered ecommerce solutions.
          </h1>

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
<<<<<<< HEAD
        {/* orbit */}
        <div className=" flex flex-col items-center justify-center ">
          <Orbit />
=======

        <div className=" flex flex-col">
          <h1 className="text-bold  z-50 mt-9 px-5 py-4 text-center text-5xl text-white">
            We serve all around the world
          </h1>
          <img
            loading="lazy"
            decoding="async"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Globe.svg"
            className=" rotate mx-auto h-3/4 w-2/4 md:w-full "
            alt="imag"
          />
>>>>>>> 55a5d0a34b72795629c921f47221b1ff05e5d999
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
