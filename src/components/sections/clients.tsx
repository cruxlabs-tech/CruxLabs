import React from 'react';
import MaxWidthWrapper from '../utils/max-width-wrapper';

const Clients = () => {
  return (
    <MaxWidthWrapper className="mt-11 flex w-4/5 flex-col gap-5 rounded-2xl border border-slate-200 md:grid md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-2  text-7xl text-white">
          35 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-bold mr-7 text-white  ">PROJECTS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-2 text-7xl text-white">
          30 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-bold text-white ">CLIENTS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-2 text-7xl text-white">
          10 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-bold text-white ">REGIONS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-2 text-7xl text-white">
          40 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-bold text-white ">DEVELOPERS</h2>
      </div>
    </MaxWidthWrapper>
  );
};

export default Clients;
