import { logoWhite } from '@/lib/constants';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="footer-logo">
          <img src={logoWhite} alt="Company Logo" className="h-10" />
        </div>

        <div className="font-semibold">
          &copy; {new Date().getFullYear()} Crux Labs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
