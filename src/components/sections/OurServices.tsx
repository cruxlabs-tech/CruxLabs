import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import { Button } from "../ui/button";
import Cards from "../ui/card";
import CardWithImage from "../ui/CardwithImage";

const OurServices = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper className="flex  flex-col justify-center items-center gap-8 lg:grid lg:grid-cols-2  ">
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
          <h1 className="text-white  text-center  text-3xl py-2">
            Our Services
          </h1>
          <h2 className="text-white text-xl p-2 text-center py-2">
            When problem is there, Flashey is always there{" "}
          </h2>
          <h1 className="text-white text-medium text-center  leading-tight py-2">
            We play a crucial role in enabling organizations to leverage
            technology for improved efficiency, innovation, and competitive
            advantage. Our services include software development, network
            infrastructure maintenance, cybersecurity, cloud computing
            solutions, and technical support.
          </h1>
          <Button className="text-white p-4 mx-auto border border-slate-400 hover:bg-slate-800 w-2/4">
            View All Services
          </Button>
        </div>

        <div className="flex flex-col  sm:grid sm:grid-cols-1 md:grid-cols-2  gap-12">
          <CardWithImage
            imgsrc="/seo.png"
            title="Seo and Digital Marketing"
            desc="Maximize your online presence and connect with your ideal customers through well-planned SEO and digital marketing strategies"
          />
          <CardWithImage
            imgsrc="/website.png"
            title="Web Design and development"
            desc="We have been crafting websites that are both visually stunning and highly functional, designed to fit the specific requirements of your.."
          />
          <CardWithImage
            imgsrc="/ecommerce.png"
            title="E-commerce Solutions"
            desc="Take your company to the highest possible level with our custom e-commerce solutions. We build safe, easy-to-navigate online stores "
          />
          <CardWithImage
            imgsrc="/branding.png"
            title="Branding"
            desc="From logo design to brand strategy, create a unique brand identity that speaks to your audience. This will ensure that your brand has a.."
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurServices;
