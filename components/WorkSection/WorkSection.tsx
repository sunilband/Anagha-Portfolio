"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

const WorkSection = (props: Props) => {
  const [selectedProject, setSelectedProject] = useState<any>(0);
  const [rerender, setRerender] = useState<any>(false);
  const repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomImageArray = [
    "https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28=",
    "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=2048x2048&w=is&k=20&c=cM_JXt2TA5RkUwemBr30OYs_v_Wz2KaQD-Lze6Koz88=",
  ];

  useEffect(() => {
    setRerender(false);
    setTimeout(() => {
      setRerender(true);
    }, 10);
  }, [selectedProject]);

  return (
    <div className="flex items-end  h-screen overflow-hidden">
      {/* images section */}
      <motion.div
        initial={{ opacity: 0, transformOrigin: "bottom left" }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-[50%] h-[70%] overflow-hidden rounded-tr-[100px]"
      >
        {rerender && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              transformOrigin: "bottom left",
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Image
              src={randomImageArray[selectedProject]}
              width={1000}
              height={1000}
              alt="project image"
              objectFit="contain"
              className="h-fit w-fit rounded-tr-[100px]"
            />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-[50%] h-[60%] px-8"
      >
        <div className="flex justify-between items-center px-4">
          <h2 className="barlowFont text-[2em] font-bold tracking-wider">
            WORK
          </h2>
          <p className="montserratFont">9</p>
        </div>
        {/* divider */}
        <div className="w-full h-[1px] bg-[#000000] opacity-50" />
        {/* project section */}
        <div className="flex flex-col  h-[300px] overflow-auto hideScroll">
          {repeat.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onHoverStart={() =>
                  selectedProject == 0 || selectedProject == null
                    ? setSelectedProject(1)
                    : setSelectedProject(0)
                }
                onHoverEnd={() => {
                  setSelectedProject(null);
                }}
              >
                <div className="flex w-[100%] justify-between px-2 items-center group">
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
                    exit={{ rotate: 180 }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    className="montserratFont text-[0.8em] font-bold tracking-wider max-w-[50%] leading-tight cursor-pointer flex items-center py-4"
                  >
                    <span className="invisible group-hover:visible">→</span>

                    {index == 0 ? (
                      <div className="relative">
                        <span>Task Manager App {index}</span>
                        <span className="absolute right-[-4.5rem] text-lg p-2 rounded-full bg-[#7AF8CD] text-black">
                          new
                        </span>
                      </div>
                    ) : (
                      `Task Manager App ${index}`
                    )}
                  </motion.h3>
                  <p className="montserratFont text-[0.7em]">Mobile App</p>
                  <p className="montserratFont text-[0.7em]">2021</p>
                </div>
                <div className="w-full h-[0.5px] bg-[#000000] opacity-20" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
