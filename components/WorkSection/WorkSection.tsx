"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimationContext } from "@/context/BgAnimationTrigger";
import FloatingPhone from "./FloatingPhone/FloatingPhone";
import { useDataContext } from "@/context/DataContext";

type Props = {};

const WorkSection = (props: Props) => {
  const { restart, setRestart } = useAnimationContext();
  const [rerender, setRerender] = useState<any>(false);
  const { data } = useDataContext();
  const { workPage } = data;
  const [project, setProject] = useState<any>({
    topPhone: "https://s13.gifyu.com/images/Sjsi1.png",
    bottomPhone: "https://s13.gifyu.com/images/Sjsio.png",
  });

  useEffect(() => {
    setRerender(false);
    setTimeout(() => {
      setRerender(true);
    }, 10);
  }, [project]);

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
          {rerender && (
            <FloatingPhone
              topPhone={project.topPhone}
              bottomPhone={project.bottomPhone}
            />
          )}
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
            <span>WORK</span>
          </motion.h2>
          <p className="montserratFont">{workPage.projects.length}</p>
        </div>
        {/* divider */}
        <div className="h-[2px] w-full bg-[#000000] opacity-50" />
        {/* project section */}
        <div className="hideScroll flex h-fit max-h-[80%] flex-col overflow-auto">
          {workPage.projects.map((item, index) => {
            return (
              <motion.a
                href={item.github}
                rel="noreferrer"
                target="_blank"
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onHoverStart={() =>
                  setProject({
                    topPhone: item.topPhoneImage,
                    bottomPhone: item.bottomPhoneImage,
                  })
                }
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
                    className="montserratFont flex max-w-[50%] items-center py-10 text-[0.8em] font-bold leading-tight tracking-wider"
                  >
                    <p className="invisible group-hover:visible">→</p>

                    {index == 0 ? (
                      <div className="relative flex items-center text-start">
                        <p>{item.name}</p>
                        <p className="invisible absolute right-[-4rem] rounded-full bg-[#7AF8CD] p-2 text-lg lg:visible">
                          new
                        </p>
                      </div>
                    ) : (
                      `${item.name}`
                    )}
                  </motion.h3>
                  <div className="flex gap-20">
                    <p className="montserratFont text-[0.7em]">{item.type}</p>
                    <p className="montserratFont text-[0.7em]">{item.year}</p>
                  </div>
                </div>
                <div className="h-[0.5px] w-full bg-[#000000] opacity-20" />
              </motion.a>
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
