"use client"
import React from "react";
import Magnetic from "../magnetic/index";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { useModeContext } from "../../context/DarkModeContext";

type Props = {};

const LandingPage = (props: Props) => {

  const { mode } = useModeContext();
  return (
    <div className="flex h-screen justify-center items-center p-2">
      <div className="flex flex-wrap flex-col items-center justify-center sm:gap-[-50px] gap-10">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-8 flex-wrap leading-none mb-[-30px]"
        >
          <span className="trainFont text-[2em]">HEY, I’M</span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`fiexenFontBold text-[3em] tracking-wide ${mode.darkMode?"text-black":"text-[#606887]"} leading-none font-semibold `}
            
          >
            <Magnetic>ANAGHA YAWALE</Magnetic>
          </motion.span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-8 flex-wrap justify-center leading-none sm:mt-0 mt-10"
        >
          <span className="trainFont text-[2em] ">BUT YOU CAN CALL ME</span>{" "}
          <span className={`fiexenFontBold text-[3em] tracking-wide ${mode.darkMode?"text-black":"text-[#606887]"} font-semibold`}>
            ANAA
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="sm:w-[50%]"
        >
          <h3 >
            I’m a Flutter Developer, UX/UI designer & Professional
            Procrastinator
          </h3>
        </motion.div>

        <div className="flex gap-10 font-semibold">
          <motion.p 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hover-underline-animation"> → See my projects</motion.p>
          <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hover-underline-animation"> → More about me</motion.p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
