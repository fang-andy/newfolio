import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Instagram, LinkedIn, Mail } from "@/assets";

// const Side = ({ children, isHome, orientation }) => {
//   const [isMounted, setIsMounted] = useState(!isHome);

//   useEffect(() => {
//     if (!isHome || prefersreducedMotion) return;

//     const timeout = setTimeout(() => setIsMounted(true), 2000);

//     return () => clearTimeout(timeout);
//   }, []);

// };

const Social = () => {
  return (
    <div className="w-[40px] fixed bottom-0 right-[40px] z-10">
      <ul className="flex flex-col items-center m-0 p-0 list-none">
        <li className="h-[50px]">
          <a
            className="p-[10px] hover:opacity-50 transition duration-500"
            href="https://github.com/fang-andy"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="github-link" src={Github} width={24} height={24} />
          </a>
        </li>
        <li className="h-[50px]">
          <a
            className="p-[10px] hover:opacity-50 transition duration-500"
            href="https://linkedin.com/in/andy-fang"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="linkedin-link" src={LinkedIn} />
          </a>
        </li>
        <li className="h-[50px]">
          <a
            className="p-[10px] hover:opacity-50 transition duration-500"
            href="https://instagram.com/andeezyy"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="instagram-link"
              src={Instagram}
            />
          </a>
        </li>
        <li className="mb-[100px]">
          <a
            className="p-[10px] hover:opacity-50 transition duration-500"
            href={`mailto:afang1094@gmail.com`}
            rel="noreferrer"
          >
            <Image
              alt="mail-link"
              src={Mail}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;