"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ activeLink, setActiveLink }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const Link = ({ page }) => {
    const lowerCasePage = page.toLowerCase();

    return (
      <AnchorLink
        className={`${activeLink === lowerCasePage ? "text-[#013220]" : ""}
        ${nav ? "py-6 text-4xl" : ""}
         hover:text-greenleaf transition duration-500 nav-link`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setActiveLink(lowerCasePage);
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
        items-center px-[3rem] py-4 text-grey pt-10 z-10"
    >
      <div>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex flex-col pt-14 text-[14px] font-light text-right">
        <Link page="home" />
        <Link page="about" />
        <Link page="work" />
        <Link page="contact" />
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
        <Link page="Home" />
        <Link page="About" />
        <Link page="Work" />
        <Link page="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
