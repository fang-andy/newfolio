import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="snap-start w-screen h-screen bg-beige text-grey pt-20"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-4/5 px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-olive">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-4/5 grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl">
            <p>Hi. I'm Andy, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="font-light">
              Coming from a finance background, I discovered my passion for
              technology later in my career, and it's been an exhilarating
              journey ever since. During my transition to the world of software
              development, I realized the immense potential technology holds to
              create meaningful change. I immersed myself in JavaScript, and
              became passionate about learning new technologies and developing
              solutions that streamline workflows and enhance lives and
              businesses. As a problem solver at heart, I thrive on untangling
              complex challenges and crafting seamless experiences for users. My
              strong analytical skills, combined with a creative approach to
              problem-solving, enable me to deliver scalable and efficient
              solutions. I believe software development goes beyond code; it's
              about crafting seamless experiences that leave a lasting impact on
              users. Collaborating with cross-functional teams, I've honed my
              technical skills and communication abilities. In fast-paced
              environments, I thrive, eager to tackle new challenges, constantly
              expanding my skill set to stay ahead in this ever-evolving
              industry. Beyond coding, I enjoy travelling to other countries,
              immersing myself with the culture, food and the people. My
              ultimate goal is to make a positive impact on the world through
              technology. Let's connect and discuss potential opportunities or
              our shared love for coding. Together, we can build something
              amazing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
