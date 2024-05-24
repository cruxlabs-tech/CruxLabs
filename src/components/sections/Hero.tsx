import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import MaxWidthWrapper from '../utils/max-width-wrapper';

const Hero = () => {
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
          <div className="m-4 flex flex-col justify-between gap-5  p-3 text-white  md:flex-row md:justify-between">
            <Button className="mx-auto w-1/2 bg-slate-800 p-6 hover:bg-slate-600 ">
              Learn More
            </Button>
            <Button className="mx-auto w-1/2 bg-slate-800 p-6 hover:bg-slate-600">
              Contact Us
            </Button>
          </div>
        </div>

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
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
