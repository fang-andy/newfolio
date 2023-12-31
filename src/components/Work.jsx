import React from "react";
import BetterBeans from "@/assets/betterbeans.jpeg";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full mid:h-screen bg-[#0a192f] text-gray-300 pt-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fca26e]">
            Work
          </p>
          <p className="py-6">
            Check out some of my recent projects and work I completed
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BetterBeans})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text0center rounded-lg px-4 py-3 m-3 bg-white
                    text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
