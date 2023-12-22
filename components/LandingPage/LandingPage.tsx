"use client";
import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { useModeContext } from "../../context/DarkModeContext";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import Link from "next/link";
import { useDataContext } from "@/context/DataContext";

type Props = {};

const LandingPage = (props: Props) => {
  const { setRestart } = useAnimationContext();
  const { mode } = useModeContext();
  const { data } = useDataContext();
  const { homePage } = data;
  const NameText = homePage.name;
  const NameTextArray = NameText.toUpperCase().split("");

  return (
    <motion.div
      exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
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
          className="mb-[-30px] flex  flex-wrap items-center justify-center gap-8 leading-none"
        >
          <p className="montserratFont text-[1.5em] sm:text-[2em]">HEY, I’M</p>{" "}
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
          className="mt-10 flex  flex-wrap items-center justify-center gap-8 leading-none sm:mt-0"
        >
          <p className="montserratFont text-[1.5em] sm:text-[2em] ">
            BUT YOU CAN CALL ME
          </p>{" "}
          <span
            className={`barlowFont text-[3em] tracking-wide ${
              mode.darkMode ? "text-black" : "text-black"
            } shadowText mt-[-20px] font-semibold sm:mt-[1.2rem]`}
          >
            {homePage.petName.toUpperCase()}
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:w-[50%]"
        >
          <h3 className="fiexenFont bg-clip-text text-[25px] leading-tight">
            {homePage.message}
          </h3>
        </motion.div>

        <div className="leading none fiexenFont flex flex-wrap items-center justify-center gap-10 font-semibold">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover-underline-animation"
          >
            {" "}
            <Link href="/projects"> → See my projects</Link>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover-underline-animation "
          >
            <Link href="/about"> → More about me</Link>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
