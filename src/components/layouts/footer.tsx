import { logoImage } from '@/lib/constants';
import { Copyright } from 'lucide-react';

import React from 'react';

export default function footer() {
  return (
    <footer className="cont">
      <div className="flex justify-between py-6 sm:space-x-10 sm:items-center sm:space-y-0 flex-col sm:flex-row space-y-10">
        <img src={logoImage} alt="logo" className="size-10 sm:size-14" />
        <div className="flex space-x-3 font-medium text-gray-300">
          <Copyright />
          <span>2024 AstroGenesis Technologies. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
