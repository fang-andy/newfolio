"use client";

import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {

  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#fca26e] font-light">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-4">
          Andy Fang
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] pb-4">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-light pb-4">
          I'm a full-stack developer focused on delivering top-notch web
          applications.
        </p>
        <div>
          <AnchorLink
            className="text-white group border-2 px-6 py-3 my-2 flex items-center 
            hover:bg-[#fca26e] hover:border-[#fca26e] w-[215px]"
            onClick={() => setSelectedPage("work")}
            href="#work"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
