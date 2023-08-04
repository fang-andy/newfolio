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

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const workSection = document.getElementById("work");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(homeSection);
    observer.observe(aboutSection);
    observer.observe(workSection);
    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">
        <Navbar
          setSelectedPage={setSelectedPage}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        {/* {isAboveMediumScreens && (
          <DotGroup setSelectedPage={setSelectedPage} activeLink={activeLink} />
        )} */}
        {isAboveMediumScreens && <Social />}
        <Landing setSelectedPage={setSelectedPage} />
      </h1>
      <About />
      <Work />
      <Contact />
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
