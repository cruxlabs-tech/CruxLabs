import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-[#0F172A] py-10">
      <MaxWidthWrapper className="flex justify-center gap-2 md:gap-10 lg:gap-16 flex-col lg:grid md:grid-cols-2   ">
        <div className=" p-2 ">
          <Link
            href="/"
            className=" w-fit mt-5 hover:bg-slate-600 text-white mx-auto md:mx-0 flex gap-3 py-2 px-4 border border-slate-300 rounded-lg "
          >
            CheckOut our Solution <MoveRight />
          </Link>
          <div className="text-center md:text-left ">
            <h1 className="text-5xl text-white mt-7  lg:text-7xl font-bold ">
              Your Ecommerce Suite Partner
            </h1>
          </div>
          <h1 className="text-xl text-center md:text-left mt-4 text-white  ">
            Take the opportunity to elevate your business to new heights with
            our futuristic ecommerce platforms and AI-powered ecommerce
            solutions.
          </h1>
          <div className="flex text-white flex-col m-4 p-3  gap-5 justify-between  md:flex-row md:justify-between">
            <Button className="p-6 w-1/2 mx-auto bg-slate-800 hover:bg-slate-600 ">
              Learn More
            </Button>
            <Button className="p-6 w-1/2 mx-auto bg-slate-800 hover:bg-slate-600">
              Contact Us
            </Button>
          </div>
        </div>

        <div className=" flex flex-col">
          <h1 className="text-bold  px-5 text-5xl text-center py-4 z-50 mt-9 text-white">
            We serve all around the world
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Globe.svg"
            className=" rotate mx-auto w-2/4 md:w-full h-3/4 "
            alt="imag"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
