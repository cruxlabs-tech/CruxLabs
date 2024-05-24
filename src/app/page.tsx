import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import Clients from '@/components/sections/clients';
import Hero from '@/components/sections/hero';
import OurServices from '@/components/sections/our-services';
import WhyUs from '@/components/sections/why-us';
import Cards from '@/components/ui/card';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-0 flex flex-col bg-[#0F172A] pb-8 pt-20">
        <div className="m-4 flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-3xl text-white ">Our Working Process</h1>
          <h2 className="text-xl font-bold leading-tight text-white sm:text-3xl">
            Here is how we work to Grow Your Business
          </h2>
        </div>
        <MaxWidthWrapper className="mt-6 flex  flex-col gap-5 sm:grid sm:grid-cols-2 sm:flex-row  lg:grid-cols-4 ">
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
        <MaxWidthWrapper className="flex flex-col items-center justify-center md:flex-row ">
          <div className="flex w-full flex-col items-center justify-center p-4 ">
            <img
              loading="lazy"
              decoding="async"
              src="/Mission.svg"
              alt="mission"
              className="text-center"
            />
            <h1 className="p-3 text-center text-2xl text-white ">Our Mission</h1>
            <h1 className="text-wrap p-2 text-center font-semibold  text-white">
              To offer businesses of all sizes innovative and customizable ecommerce solutions that
              follow future trends.
            </h1>
          </div>
          <div className="my-auto hidden h-40 border bg-slate-50 md:block " />
          <div className="flex w-full flex-col items-center justify-center p-4">
            <img loading="lazy" decoding="async" src="/Vision.svg" alt="vision" />
            <h1 className="p-3 text-center text-2xl text-white ">Our Vision</h1>
            <h1 className="p-2 text-center font-semibold text-white">
              To be the leading provider of cutting-edge ecommerce solutions globally.
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
      <Clients />
      <OurServices />
    </div>
  );
}
