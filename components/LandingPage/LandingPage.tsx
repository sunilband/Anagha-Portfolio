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
    <motion.div
      exit={{ opacity: 0, y: 100, transition: { duration: 0.5 } }}
      className="flex h-screen items-center justify-center overflow-hidden p-2 "
    >
      <div
        className={`flex flex-col flex-wrap items-center justify-center gap-10 sm:gap-[-50px]`}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-[-30px] flex cursor-default flex-wrap items-center justify-center gap-8 leading-none"
        >
          <span className="montserratFont text-[1.5em] sm:text-[2em]">
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
            } shadowText mb-6 mt-[-20px] font-semibold leading-none sm:mb-0 sm:mt-[1.2rem] `}
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
          className="mt-10 flex cursor-default flex-wrap items-center justify-center gap-8 leading-none sm:mt-0"
        >
          <span className="montserratFont text-[1.5em] sm:text-[2em] ">
            BUT YOU CAN CALL ME
          </span>{" "}
          <span
            className={`barlowFont text-[3em] tracking-wide ${
              mode.darkMode ? "text-black" : "text-black"
            } shadowText mt-[-20px] font-semibold sm:mt-[1.2rem]`}
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
          <h3 className="fiexenFont cursor-default bg-clip-text text-[25px] leading-tight">
            I’m a Flutter Developer, UX/UI designer & Professional
            Procrastinator
          </h3>
        </motion.div>

        <div className="leading none fiexenFont flex flex-wrap items-center justify-center gap-10 font-semibold">
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
    </motion.div>
  );
};

export default LandingPage;
