"use client";
import React from "react";
import Magnetic from "../magnetic/index";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="flex h-screen justify-center items-center p-2">
      <div className="flex flex-wrap flex-col items-center justify-center sm:gap-[-50px] gap-10">
        <h2 className="flex items-center justify-center gap-8 flex-wrap leading-none">
          <span className="trainFont text-[2em]">HEY, I’M</span>{" "}
          <span className="fiexenFontBold text-[3em] tracking-wide text-[#606887] leading-none">
            <Magnetic>ANAGHA YAWALE</Magnetic>
          </span>
        </h2>
        <h2 className="flex items-center gap-8 flex-wrap justify-center leading-none">
          <span className="trainFont text-[2em] ">BUT YOU CAN CALL ME</span>{" "}
          <span className="fiexenFontBold text-[3em] tracking-wide text-[#606887]">ANAA</span>
        </h2>
        <div className="w-[50%]">
          <h3>
            I’m a Flutter Developer, UX/UI designer & Professional
            Procrastinator
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
