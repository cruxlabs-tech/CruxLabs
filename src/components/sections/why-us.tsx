import React from 'react';
import MaxWidthWrapper from '../utils/max-width-wrapper';

const WhyUs = () => {
  return (
    <div className="bg-[#0F172A] p-2 pt-20">
      <MaxWidthWrapper className="flex flex-col justify-center gap-2 md:grid-cols-2 md:gap-10 lg:grid lg:gap-16   ">
        <div className=" flex flex-col justify-start gap-6 p-5 sm:justify-center  ">
          <h1 className="text-center text-4xl font-bold text-white">Why Flashey ? </h1>
          <h1 className="text-xl font-medium leading-tight text-white  ">
            We excel in software innovation, offering tailored solutions with industry-leading
            expertise. Our commitment to quality ensures robust and scalable software delivered on
            time. With ongoing support and competitive pricing, we re dedicated to your success,
            making us your trusted partner in the digital landscape.
          </h1>
        </div>

        <div className="w-full rounded-lg bg-white ">
          <img className="h-full w-full  bg-[#0F172A] " src="/whyus.png" alt="img" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyUs;
