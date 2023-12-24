"use client";
import React, { useState } from "react";
import Phone from "./Phone/Phone";
import { motion } from "framer-motion";
import { useAnimationContext } from "../../context/BgAnimationTrigger";
import { useModeContext } from "../../context/DarkModeContext";

type Props = {};

const ContactSection = (props: Props) => {
  const { mode } = useModeContext();
  const { restart, setRestart } = useAnimationContext();
  return (
    <div className="flex h-screen flex-wrap items-center justify-evenly px-4 ">
      <motion.div
        exit={{
          x: -100,
          opacity: 0,
        }}
        className="mt-48 md:w-[45%] lg:mt-28 lg:h-[500px] lg:w-[50%]"
      >
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
            CONTACT
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
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="fiexenFont mt-8 bg-clip-text text-justify text-[17px] leading-snug tracking-wide md:mt-20 lg:w-[95%] lg:text-[25px] "
        >
          <div className="montserratFont flex gap-4 lg:text-[1.3em]">
            <p
              className={`fiexenFontBold ${
                mode.darkMode ? "text-black/80" : ""
              }`}
            >
              Mail:
            </p>
            <p>anaghayawale@gmaail.com</p>
          </div>
          <div className="mt-10 flex gap-4 lg:text-[1.3em]">
            <p
              className={`fiexenFontBold ${
                mode.darkMode ? "text-black/80" : ""
              }`}
            >
              Socials:
            </p>

            <motion.span
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="hover-underline-dark flex w-fit gap-4"
            >
              {/* down arrow symbol */}
              <motion.span
                initial={{ rotate: -45 }}
                whileHover={{
                  rotate: 0,
                  transition: { duration: 0.2 },
                }}
                className="mr-2"
              >
                →
              </motion.span>
              GitHub
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="hover-underline-dark flex w-fit gap-2"
            >
              {/* down arrow symbol */}
              <motion.span
                initial={{ rotate: -45 }}
                whileHover={{
                  rotate: 0,
                  transition: { duration: 0.2 },
                }}
                className="mr-2"
              >
                →
              </motion.span>
              Instagram
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 90 }}
        animate={{ opacity: 1, x: 0, rotate: 0, scale: 0.72 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        exit={{
          x: 100,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
        className="mt-[-100px] scale-75 rounded-[60px] drop-shadow-2xl md:mt-0"
        // make shadow
        style={{
          boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Phone />
      </motion.div>
    </div>
  );
};

export default ContactSection;
