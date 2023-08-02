"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  DotGroup,
  Social,
  Landing,
  About,
  Work,
  Contact,
} from "@/components";
import useMediaQuery from "../hooks/useMediaQuery";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [activeLink, setActiveLink] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const workSection = document.getElementById("work");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveLink("home");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < workSection.offsetTop
      ) {
        setActiveLink("about");
      } else if (
        scrollPosition >= workSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveLink("work");
      } else {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll-snap", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll-snap", handleScroll);

    }
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-scroll h-screen">
      <h1 className="text-2xl">
        <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
        {/* {isAboveMediumScreens && (
          <DotGroup setSelectedPage={setSelectedPage} activeLink={activeLink} />
        )} */}
        {isAboveMediumScreens && <Social />}
        <div className="snap-start">
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </h1>
        <div className="snap-start">
          <About />
        </div>
        {/* <Skills /> */}
        <div className="snap-start">
          <Work />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
    </div>
  );
};

export default App;

/*
dark blue       #1a3947
muted blue      #566575
gray            #797983
peach           #efbd9d
light orange    #fca26e
bright orange   #f5751d
background      #0a192f

#b7ab98
hsla(37,18%,66%,.5)
*/
