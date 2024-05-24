import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";

const WhyUs = () => {
  return (
    <div className="bg-[#0F172A] p-2 pt-20">
      <MaxWidthWrapper className="flex justify-center gap-2 md:gap-10 lg:gap-16 flex-col lg:grid md:grid-cols-2   ">
        <div className=" p-5 flex gap-6 flex-col justify-start sm:justify-center  ">
          <h1 className="text-4xl font-bold text-center text-white">
            Why Flashey ?{" "}
          </h1>
          <h1 className="text-white text-xl font-medium leading-tight  ">
            We excel in software innovation, offering tailored solutions with
            industry-leading expertise. Our commitment to quality ensures robust
            and scalable software delivered on time. With ongoing support and
            competitive pricing, we re dedicated to your success, making us your
            trusted partner in the digital landscape.
          </h1>
        </div>

        <div className="bg-white w-full rounded-lg ">
          <img
            className="w-full h-full  bg-[#0F172A] "
            src="/whyus.png"
            alt="img"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyUs;
