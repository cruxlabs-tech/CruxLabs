'use client';
import { logoImage } from '@/lib/constants';
import { inter, poppins } from '@/lib/fonts';
import { scrollIntoView } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div
      className={` ${poppins.className} cont sticky left-0 top-0 z-30 flex h-24 w-full items-center justify-between bg-gray-900/40 backdrop-blur-xl transition-all`}
    >
      <Link href="/" className="md:text-md flex items-center space-x-3">
        <img loading="lazy" decoding="async" src={logoImage} alt="logo" className="size-11" />
        <span className={`${inter.className} md:text-md text-xl font-semibold lg:text-lg`}>
          Astro Genesis
        </span>
      </Link>

      <nav className="hidden items-center justify-start font-medium  text-gray-200/95 md:flex md:space-x-4 lg:space-x-12">
        <button onClick={scrollIntoView('about-us')}>About us</button>
        <button onClick={scrollIntoView('services')}>Services</button>
        <button onClick={scrollIntoView('testimonial')}>Testimonial</button>
        <button onClick={scrollIntoView('contact-us')}>Contact us</button>
        <Menu className=" md:hidden" />
        <button
          onClick={scrollIntoView('contact-us')}
          className="hidden h-10 rounded-full bg-emerald-700 px-4 md:block hover:brightness-110"
        >
          Let&apos;s get started
        </button>
      </nav>
    </div>
  );
}
