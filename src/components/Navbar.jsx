"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();

    return (
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-[#fca26e]" : ""}
        ${nav ? "py-6 text-4xl" : ""}
         hover:text-[#fca26e] transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          !nav ? null : handleClick();
        }}
      >
        {page}
      </AnchorLink>
    );
  };

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between
        items-center px-20 py-4 bg-[#0a192f] text-gray-300 pt-8"
    >
      <div>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex justify-between gap-16 text-[18px] font-light">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        {/* <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        /> */}
        <Link
          page="Work"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 hover:cursor-pointer pr-0"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen bg-[#0a192f] flex flex-col justify-center items-center font-light"
        }
      >
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        {/* <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        /> */}
        <Link
          page="Work"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-blue-600"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#333333]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#565f69]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
