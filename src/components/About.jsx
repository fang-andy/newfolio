import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#fca26e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl">
            <p>Hi. I'm Andy, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="font-light">
              I am passionate about learning new technologies and developing
              solutions that streamline workflows and provides a positive impact
              to everyone's daily lives. I am currently working at LinkedIn as a
              Lead Deal Desk Associate, while also developing software to
              optimize our workflow. I am making a career pivot to Software
              Engineering, which is where my interest lies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
