"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import Image from "next/image";
import { useModeContext } from "../../context/DarkModeContext";
import NowPlaying from "../NowPlaying/NowPlaying";
import { useDataContext } from "@/context/DataContext";
import FileSaver from "file-saver";

type Props = {};

const AboutSection = (props: Props) => {
  const { mode } = useModeContext();
  const { restart, setRestart } = useAnimationContext();
  const { data } = useDataContext();
  const { aboutPage } = data;
  const [downloadRotate, setDownloadRotate] = useState(false);

  const handleDownloadPDF = () => {
    console.log("download");
    const fileURL = `./files/resume.pdf`;
    FileSaver.saveAs(fileURL, "Anagha_Yawale_resume.pdf");
  };
  return (
    <motion.div className="flex h-screen w-screen flex-col-reverse items-start justify-center overflow-hidden md:flex-row">
      <motion.div
        exit={{
          opacity: 0,
          x: -100,
          transition: { duration: 0.3 },
        }}
        className="flex w-full justify-center gap-4 lg:justify-end"
      >
        {/* about data */}
        <div className="z-50 mr-2 flex h-screen w-[90%] flex-col justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="relative mt-32 h-[250px] w-[350px] self-center overflow-hidden rounded-[20px] md:h-[500px] md:w-[600px] md:rounded-[30px] lg:hidden"
          >
            {" "}
            <div className="absolute left-[50%]  w-[200px] md:left-1 md:top-1">
              <NowPlaying />
            </div>
            <Image
              src={aboutPage.image}
              width={2000}
              height={2000}
              alt="Picture of the author"
              priority
            />
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
            className="h-[1.5px] w-full bg-[#000000]/70 "
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
            className={`fiexenFont bg-clip-text text-justify text-[17px] leading-snug tracking-wide lg:w-[95%] lg:text-[25px] ${
              mode.darkMode ? "text-black/80" : ""
            }`}
          >
            {aboutPage.details}
          </motion.p>

          <motion.span
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
            className={`fiexenFont flex w-fit gap-2 font-bold  ${
              mode.darkMode ? "text-black/80" : ""
            }`}
            onClick={handleDownloadPDF}
          >
            {/* down arrow symbol */}
            <motion.span
              animate={{
                rotate: downloadRotate ? 90 : 0,
                transition: { duration: 0.2 },
              }}
              className={`rotate-90`}
            >
              →
            </motion.span>
            <span className="hover-underline-dark">Resume</span>
          </motion.span>
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
          transition: { duration: 0.3 },
        }}
        className={`z-[-10] hidden w-[500px]  rounded-bl-full md:w-[1000px] lg:block ${
          mode.darkMode ? "grayscale" : ""
        } relative`}
      >
        <motion.div
          exit={{
            opacity: 0,
            x: 100,
            transition: { duration: 0.3 },
          }}
          className="absolute left-[-10%] top-1 z-50 w-[250px]"
        >
          <NowPlaying />
        </motion.div>
        <Image
          src={aboutPage.image}
          alt="Picture of the author"
          width={2000}
          height={2000}
          priority
          className="rounded-bl-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
