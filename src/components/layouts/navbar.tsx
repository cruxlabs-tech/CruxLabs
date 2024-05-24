import { logoWhite } from '@/lib/constants';
import { poppins } from '@/lib/fonts';
import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from '../utils/max-width-wrapper';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] h-20 w-full bg-[#0F172A]/95 backdrop-blur-md transition-all">
      <MaxWidthWrapper className="flex items-center justify-between ">
        <Link href="/" className="md:text-md flex items-center gap-1 text-white ">
          <img loading="lazy" decoding="async" src={logoWhite} alt="logo" className="size-11" />
          <span className={`${poppins.className} md:text-md text-xl font-semibold lg:text-lg `}>
            Cruxlabs
          </span>
        </Link>

        {/* mobile menu */}
        <div className=" flex items-center justify-between gap-10">
          <nav className="hidden items-center justify-start text-white md:flex md:gap-4 lg:gap-12 xl:gap-16  ">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Team</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
        <div className="mx-2 flex items-center gap-6">
          <Menu className="text-white md:hidden" />
          <Link
            href="/contact"
            className="hidden rounded-xl bg-green-600 px-4 py-[5px] text-lg font-semibold md:block"
          >
            Join <ArrowRight className="inline-flex " />
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Navbar;
