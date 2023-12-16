"use client";
import React from "react";
import Magnetic from "../Magnetic/index";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { useModeContext } from "../../context/DarkModeContext";
import { useAnimationContext } from "@/context/BgAnimationTrigger";

type Props = {};

const LandingPage = (props: Props) => {
  const { restart, setRestart } = useAnimationContext();
  const { mode } = useModeContext();
  return (
    <div className="flex h-screen justify-center items-center p-2">
      <div className="flex flex-wrap flex-col items-center justify-center sm:gap-[-50px] gap-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 flex-wrap leading-none mb-[-30px] cursor-default"
        >
          <span className="montserratFont sm:text-[2em] text-[1.5em]">HEY, I’M</span>{" "}
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`barlowFont text-[3em] tracking-wide ${
              mode.darkMode ? "text-black" : "text-black"
            } leading-none font-semibold shadowText sm:mt-[1.2rem] mb-6 sm:mb-0 mt-[-20px]`}
            onMouseEnter={() => setRestart(true)}
            onMouseLeave={() => setRestart(false)}
          >
            {/* <Magnetic> */}
              ANAGHA YAWALE
              {/* </Magnetic> */}
          </motion.span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-8 flex-wrap justify-center leading-none sm:mt-0 mt-10 cursor-default"
        >
          <span className="montserratFont sm:text-[2em] text-[1.5em] ">BUT YOU CAN CALL ME</span>{" "}
          <span
            className={`barlowFont text-[3em] tracking-wide ${
              mode.darkMode ? "text-black" : "text-black"
            } font-semibold shadowText sm:mt-[1.2rem] mt-[-20px]`}
          >
            ANAA
          </span>
        </motion.h2>
        <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:w-[50%]"
        >
          <h3 className="cursor-default fiexenFont text-[25px] leading-tight bg-clip-text">
            I’m a Flutter Developer, UX/UI designer & Professional
            Procrastinator
          </h3>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 font-semibold leading none fiexenFont">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hover-underline-animation cursor-pointer"
          >
            {" "}
            → See my projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hover-underline-animation cursor-pointer"
          >
            {" "}
            → More about me
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
