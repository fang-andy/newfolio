"use client";

import { useState } from "react";
import { Navbar, DotGroup, Landing, About, Skills, Work, Contact } from "@/components";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
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
