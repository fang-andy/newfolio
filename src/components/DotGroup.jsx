import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-[#fca26e] before:absolute before:w-6 
    before:h-6 before:rounded-full before:border-2 before:border-[#fca26e] 
    before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-[#8892b0]"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-[#8892b0]"
        } w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-[#8892b0]"
        } w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "work" ? selectedStyles : "bg-[#8892b0]"
        } w-3 h-3 rounded-full`}
        href="#work"
        onClick={() => setSelectedPage("work")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-[#8892b0]"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
