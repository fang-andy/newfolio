import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Landing />
        <About />
        <Skills />
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