import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#fca26e]">Hi, my name is</p>
        <h1>Andy Fang</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <p>
          I'm a full-stack developer focused on delivering top-notch web
          applications.
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
