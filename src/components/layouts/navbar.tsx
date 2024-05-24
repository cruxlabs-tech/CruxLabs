import { logoWhite } from '@/lib/constants';
import { poppins } from '@/lib/fonts';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from '../utils/max-width-wrapper';

const Navbar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-20 w-full bg-[#0F172A]/95 backdrop-blur-md  transition-all">
      <MaxWidthWrapper className="flex items-center justify-between ">
        <Link href="/" className="md:text-md flex items-center gap-2 text-white md:pr-5 ">
          <img loading="lazy" decoding="async" src={logoWhite} alt="logo" className="size-10" />
          <span className={`${poppins.className} text-3xl font-semibold`}>Cruxlabs</span>
        </Link>

        {/* mobile menu */}
        <div className="mr-5 flex items-center justify-between gap-10">
          <nav className="links hidden items-center justify-start text-white md:flex md:gap-8 lg:gap-12 xl:gap-16  ">
            <Link href="/">Home</Link>
            <Link href="/">Referral</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Our Team</Link>
            <Link href="/">Solutions</Link>
          </nav>
        </div>
        <div className="mx-2 flex items-center gap-6">
          <Menu className="text-white md:hidden" />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
export default Navbar;
