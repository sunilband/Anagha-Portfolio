"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import Image from "next/image";
import AboutImage from "@/public/anagha.webp";
import { useModeContext } from "../../context/DarkModeContext";
import NowPlaying from "../NowPlaying/NowPlaying";

type Props = {};

const AboutSection = (props: Props) => {
  const { mode } = useModeContext();
  const { restart, setRestart } = useAnimationContext();
  const [downloadRotate, setDownloadRotate] = useState(false);
  return (
    <motion.div className="flex h-screen w-screen flex-col-reverse items-start justify-center overflow-hidden md:flex-row">
      <motion.div
        exit={{
          opacity: 0,
          x: -100,
          transition: { duration: 0.5 },
        }}
        className="flex w-full justify-center gap-4 lg:justify-end"
      >
        {/* about data */}
        <div className="mr-2 flex h-screen w-[90%] flex-col justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="mt-32 h-[250px] w-[350px] self-center overflow-hidden rounded-[20px] md:h-[500px] md:w-[600px] md:rounded-[30px] lg:hidden"
          >
            <Image src={AboutImage} alt="Picture of the author" priority />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="barlowFont text-start text-[2em] font-bold tracking-wider text-black"
          >
            <motion.span
              whileHover={{
                letterSpacing: "7px",
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => {
                setRestart(!restart);
              }}
              onMouseLeave={() => {
                setRestart(!restart);
              }}
            >
              ABOUT
            </motion.span>
          </motion.h2>
          {/* divider */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="h-[3px] w-full bg-[#000000]/50 "
          />
          {/* about content */}
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="fiexenFont cursor-default  bg-clip-text text-justify text-[17px] leading-snug tracking-wide lg:w-[95%] lg:text-[25px]"
          >
            Hey, my name is <span className="font-semibold">Anagha</span> your
            go-to Full Stack{" "}
            <span className="font-semibold text-[#015496]">Flutter</span>{" "}
            developer from India. You&apos;ll often find me immersed in the
            soulful rhythms of classical music. Cooking up a storm in the
            kitchen is my other forte, because who says coding and cooking
            can&apos;t be a perfect duet? Always hungry for new tech adventures
            and fueled by a curiosity that knows no bounds!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => {
              setDownloadRotate(true);
            }}
            onHoverEnd={() => {
              setDownloadRotate(false);
            }}
            className="fiexenFont flex w-fit gap-2 font-bold"
          >
            {/* down arrow symbol */}
            <motion.span
              animate={{
                rotate: downloadRotate ? 90 : 0,
                transition: { duration: 0.2 },
              }}
              className="rotate-90"
            >
              →
            </motion.span>
            Resume
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        exit={{
          opacity: 0,
          x: 100,
          transition: { duration: 0.5 },
        }}
        className={`z-[-10] hidden w-[500px] overflow-hidden rounded-bl-full md:w-[1000px] lg:block ${
          mode.darkMode ? "grayscale" : ""
        } relative`}
      >
        <div className="absolute left-1 top-1 w-[250px]">
          <NowPlaying />
        </div>
        <Image src={AboutImage} alt="Picture of the author" priority />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
