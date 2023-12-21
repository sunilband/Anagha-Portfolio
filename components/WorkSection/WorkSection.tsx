"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import FloatingPhone from "./FloatingPhone/FloatingPhone";

type Props = {};

const WorkSection = (props: Props) => {
  const { restart, setRestart } = useAnimationContext();
  const [selectedProject, setSelectedProject] = useState<any>(0);
  const [rerender, setRerender] = useState<any>(false);
  const repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setRerender(false);
    setTimeout(() => {
      setRerender(true);
    }, 10);
  }, [selectedProject]);

  return (
    <motion.div className="flex h-screen flex-row flex-wrap items-center justify-evenly overflow-hidden lg:flex-row">
      {/* images section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        exit={{
          opacity: 0,
          x: -100,
          transition: { duration: 0.3 },
        }}
        className="h-fit w-fit lg:mt-48"
      >
        {" "}
        <div className="w-[200px] md:w-[270px] lg:w-[350px]">
          {rerender && <FloatingPhone />}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        exit={{
          opacity: 0,
          x: 100,
          transition: { duration: 0.3 },
        }}
        className="h-[60%] px-8 lg:w-[700px] "
      >
        <div className="flex items-center justify-between px-4">
          <motion.h2
            whileHover={{
              letterSpacing: "7px",
              transition: { duration: 0.2 },
            }}
            className="barlowFont text-[2em] font-bold tracking-wider text-black"
            onMouseEnter={() => {
              setRestart(!restart);
            }}
            onMouseLeave={() => {
              setRestart(!restart);
            }}
          >
            WORK
          </motion.h2>
          <p className="montserratFont">9</p>
        </div>
        {/* divider */}
        <div className="h-[2px] w-full bg-[#000000] opacity-50" />
        {/* project section */}
        <div
          className="hideScroll flex h-fit max-h-[80%] flex-col overflow-auto"
          // if mapped elements dont go to 80% height, add this to the div: style={{height: 'fit-content'}}
        >
          {repeat.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onHoverStart={() =>
                  selectedProject == 0 || selectedProject == null
                    ? setSelectedProject(1)
                    : setSelectedProject(0)
                }
                onHoverEnd={() => {
                  setSelectedProject(1);
                }}
              >
                <div className="group flex w-[100%] items-center justify-between px-2">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 1000,
                    }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    className="montserratFont flex max-w-[50%] cursor-pointer items-center py-10 text-[0.8em] font-bold leading-tight tracking-wider"
                  >
                    <span className="invisible group-hover:visible">→</span>

                    {index == 0 ? (
                      <div className="relative flex items-center text-start">
                        <span>
                          Task Manager app made my anagha demo {index}
                        </span>
                        <span className="invisible absolute right-[-4rem] rounded-full bg-[#7AF8CD] p-2 text-lg lg:visible">
                          new
                        </span>
                      </div>
                    ) : (
                      `Task Manager App ${index}`
                    )}
                  </motion.h3>
                  <div className="flex gap-20">
                    <p className="montserratFont text-[0.7em]">Mobile App</p>
                    <p className="montserratFont text-[0.7em]">2021</p>
                  </div>
                </div>
                <div className="h-[0.5px] w-full bg-[#000000] opacity-20" />
              </motion.div>
            );
          })}
        </div>
        {/* divider */}
        <div className="h-[2px] w-full bg-[#000000] opacity-50" />
      </motion.div>
    </motion.div>
  );
};

export default WorkSection;
