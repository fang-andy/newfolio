"use client";

import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import ProfilePic from "../../public/pic1.jpeg";
import useMediaQuery from "@/hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div id="home" className="w-[full] h-screen bg-tanly">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-4/5 h-full">
        {/* <div className="max-w-[900px] mx-auto px-8 grid grid-cols-[3fr,2fr] gap-10 h-full"> */}

        {/* IMAGE SECTION */}
        {/* <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
              before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] 
              "
            > */}
        {/* <Image
                alt="profile-picture"
                src={ProfilePic}
                width={500}
                height={500}
              /> */}
        {/* </div>
          ) : (
            <Image
              alt="profile-picture"
              src={ProfilePic}
              width={500}
              height={500}
            />
          )}
        </div> */}

        <div className="text-right">
          <p className="text-grey font-light">Hi, my name is</p>
          <h1 className="text-4xl text-shadow sm:text-7xl font-bold text-[#013220] pb-4">
            Andy Fang
          </h1>
          {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] pb-4">
            I'm a Full Stack Developer.
          </h2> */}
          <p className="text-grey py-4 font-light pb-4 text-end pl-4">
            I'm a full-stack software engineer based in San Francisco, CA
            focused on delivering top-notch web applications.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <AnchorLink
            className="text-grey group border-2 border-grey rounded-full px-6 py-3 my-2 flex items-center
            hover:bg-olive hover:border-grey w-[215px]"
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
