"use client";
import React, { useState } from "react";
import Phone from "./Phone/Phone";
import { motion } from "framer-motion";
import { useAnimationContext } from "../../context/BgAnimationTrigger";
import { useModeContext } from "../../context/DarkModeContext";
import { useDataContext } from "../../context/DataContext";

type Props = {};

const ContactSection = (props: Props) => {
  const { data } = useDataContext();
  const { contactPage } = data;
  const { mode } = useModeContext();
  const { restart, setRestart } = useAnimationContext();
  const [isSent, setIsSent] = useState<boolean>(false);
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
            <p>{contactPage.email}</p>
          </div>
          <div className="mt-10 flex gap-4 lg:text-[1.3em]">
            <p
              className={`fiexenFontBold ${
                mode.darkMode ? "text-black/80" : ""
              }`}
            >
              Socials:
            </p>

            {contactPage.socials.map((item: any, index: any) => {
              return (
                <a
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                >
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
                    {item.name}
                  </motion.span>
                </a>
              );
            })}
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
        className="relative mt-[-100px] scale-75 rounded-[60px] drop-shadow-2xl md:mt-0"
        // make shadow
        style={{
          boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="relative">
          <Phone sent={isSent} setSent={setIsSent} />
          <div
            className={`absolute bottom-16 left-48 z-[1000] ${
              isSent ? "block" : "hidden"
            }`}
          >
            <motion.svg
              initial={{ y: -100 }}
              whileInView={{ y: -1000, x: 1000 }}
              transition={{ duration: 3, delay: 0.5 }}
              viewport={{ once: true }}
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
            >
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
