import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import { Menu, Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" sticky z-[100] h-20 inset-x-0 w-full border-b top-0 backdrop-blur-md transition-all  bg-[#0F172A]/95">
      <MaxWidthWrapper className="flex items-center justify-between ">
        <h1 className="text-md md:text-md md:pr-5 text-white font-bold  ">
          Ｆｌａｓｈｅｙ
        </h1>
        {/* mobile menu */}
        <div className="flex items-center justify-between gap-10 mr-5">
          <div className="links text-white hidden md:flex md:gap-8 lg:gap-12 xl:gap-16 items-center justify-start  ">
            <Link href="/">Home</Link>
            <Link href="/">Referral</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Our Team</Link>
            <Link href="/">Solutions</Link>
          </div>
        </div>
        <div className="flex items-center gap-6 mx-2">
          <Menu className="md:hidden text-white" />
          <Moon className="text-white" />
        </div>
      </MaxWidthWrapper>
      <div className="border-b  border-slate-500 w-full" />
    </nav>
  );
};
export default Navbar;
