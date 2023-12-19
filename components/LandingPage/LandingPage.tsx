"use client";
import React from "react";
import Magnetic from "../magnetic/index";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { useModeContext } from "../../context/DarkModeContext";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import Link from "next/link";

type Props = {};

const LandingPage = (props: Props) => {
  const { restart, setRestart } = useAnimationContext();
  const { mode } = useModeContext();

  const NameText = "ANAGHA YAWALE";
  // preserve the spaces and split
  const NameTextArray = NameText.split("");

  return (
    <div className="flex h-screen justify-center items-center p-2">
      <div className="flex flex-wrap flex-col items-center justify-center sm:gap-[-50px] gap-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="flex items-center justify-center gap-8 flex-wrap leading-none mb-[-30px] cursor-default"
        >
          <span className="montserratFont sm:text-[2em] text-[1.5em]">
            HEY, I’M
          </span>{" "}
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className={`barlowFont text-[3em] tracking-wide ${
              mode.darkMode ? "text-black" : "text-black"
            } leading-none font-semibold shadowText sm:mt-[1.2rem] mb-6 sm:mb-0 mt-[-20px] `}
            onMouseEnter={() => setRestart(true)}
            onMouseLeave={() => setRestart(false)}
          >
            {/* ---------------Name---------------- */}
            <div
              className={`texture-bg run-animation ${
                mode.darkMode ? "grayscale" : null
              }`}
            >
              {NameTextArray.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
              <div className="paint-stroke stroke-2"></div>
            </div>
            {/* ---------------Name End---------------- */}
          </motion.span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex items-center gap-8 flex-wrap justify-center leading-none sm:mt-0 mt-10 cursor-default"
        >
          <span className="montserratFont sm:text-[2em] text-[1.5em] ">
            BUT YOU CAN CALL ME
          </span>{" "}
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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover-underline-animation cursor-pointer"
          >
            {" "}
            <Link href="/projects"> → See my projects</Link>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover-underline-animation cursor-pointer"
          >
            <Link href="/about"> → More about me</Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
