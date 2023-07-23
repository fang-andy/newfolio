import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ setSelectedPage, activeLink }) => {
  const selectedStyles = `relative bg-[#fca26e] before:absolute before:w-4
    before:h-4 before:rounded-full before:border-2 before:border-[#fca26e]
    before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-[3rem]">
      <AnchorLink
        className={`${
          activeLink === "home" ? selectedStyles : "bg-[#8892b0]"
        } w-2 h-2 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          activeLink === "about" ? selectedStyles : "bg-[#8892b0]"
        } w-2 h-2 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          activeLink === "work" ? selectedStyles : "bg-[#8892b0]"
        } w-2 h-2 rounded-full`}
        href="#work"
        onClick={() => setSelectedPage("work")}
      />
      <AnchorLink
        className={`${
          activeLink === "contact" ? selectedStyles : "bg-[#8892b0]"
        } w-2 h-2 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
