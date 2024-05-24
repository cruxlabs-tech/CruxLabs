import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";

const Clients = () => {
  return (
    <MaxWidthWrapper className="flex mt-11 flex-col gap-5 md:grid md:grid-cols-2 w-4/5 lg:grid-cols-4 border border-slate-200 rounded-2xl">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white  text-7xl p-2">
          35 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-white mr-7 text-bold  ">PROJECTS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-7xl p-2">
          30 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-white text-bold ">CLIENTS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-7xl p-2">
          10 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-white text-bold ">REGIONS</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-7xl p-2">
          40 <span className="text-5xl">+</span>
        </h1>
        <h2 className="text-white text-bold ">DEVELOPERS</h2>
      </div>
    </MaxWidthWrapper>
  );
};

export default Clients;
