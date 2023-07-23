"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  DotGroup,
  Landing,
  About,
  Skills,
  Work,
  Contact,
} from "@/components";
import useMediaQuery from "../hooks/useMediaQuery";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        <About />

        {/* <Skills /> */}
        <Work />
        <Contact />
      </h1>
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
*/
