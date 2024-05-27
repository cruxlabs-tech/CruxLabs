import AboutUs from '@/components/sections/about-us';
import Best from '@/components/sections/best';
import ContactUs from '@/components/sections/contact-us';
import Hero from '@/components/sections/hero';
import Pricing from '@/components/sections/pricing';
import Services from '@/components/sections/services';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import WhyUs from '@/components/sections/why-us';

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Best />
      <Testimonials />
      <Stats />
      <Pricing />
      <ContactUs />
    </>
  );
}
