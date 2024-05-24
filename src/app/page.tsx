import MaxWidthWrapper from "@/components/Global/MaxWidthWrapper";
import Clients from "@/components/sections/Clients";
import Hero from "@/components/sections/Hero";
import OurServices from "@/components/sections/OurServices";
import WhyUs from "@/components/sections/WhyUs";
import Cards from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-0 pt-20 pb-8 flex flex-col bg-[#0F172A]">
        <div className="flex flex-col gap-4 m-4 justify-center items-center ">
          <h1 className="text-3xl text-white ">Our Working Process</h1>
          <h2 className="text-xl text-white sm:text-3xl font-bold leading-tight">
            Here is how we work to Grow Your Business
          </h2>
        </div>
        <MaxWidthWrapper className="flex mt-6  gap-5 flex-col sm:flex-row sm:grid sm:grid-cols-2  lg:grid-cols-4 ">
          <Cards
            title="Creativity"
            desc="The innovative procedure of investigating and producing fresh ideas or resolutions to tackle a distinct issue or fulfill a specific requirement"
          />
          <Cards
            title="Analysis"
            desc="The methodical procedure of collecting, recording, and assessing the requirements and standards that a system, product, or project must adhere to.."
          />
          <Cards
            title="Project Implementation"
            desc="Turning an abstract concept into a tangible reality by executing, delivering, and refining the developed.. "
          />
          <Cards
            title="Delivery"
            desc="Final step after successfully completion of project aling with the Multiple testing ensuring Effective user Experience.After testing,Product is given to the Client"
          />
        </MaxWidthWrapper>
      </div>
      <WhyUs />
      <div className="bg-[#0F172A] pt-8">
        <MaxWidthWrapper className="flex flex-col justify-center items-center md:flex-row ">
          <div className="flex flex-col justify-center items-center w-full p-4 ">
            <img src="/Mission.svg" alt="mission" className="text-center" />
            <h1 className="text-center text-2xl text-white p-3 ">
              Our Mission
            </h1>
            <h1 className="text-white font-semibold text-center text-wrap  p-2">
              To offer businesses of all sizes innovative and customizable
              ecommerce solutions that follow future trends.
            </h1>
          </div>
          <div className="h-40 hidden md:block my-auto bg-slate-50 border " />
          <div className="flex flex-col justify-center items-center p-4 w-full">
            <img src="/Vision.svg" alt="vision" />
            <h1 className="text-center text-2xl text-white p-3 ">Our Vision</h1>
            <h1 className="text-white font-semibold text-center p-2">
              To be the leading provider of cutting-edge ecommerce solutions
              globally.
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
      <Clients />
      <OurServices />
    </div>
  );
}
