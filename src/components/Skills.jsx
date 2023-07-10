import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#fca26e]">
            Technologies
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/javascript.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/react.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/node.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/mongo.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/postgresql.svg"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/html.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/css.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image
              src={"/github.png"}
              className="mx-auto"
              width={60}
              height={60}
              alt="html icon"
            />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
