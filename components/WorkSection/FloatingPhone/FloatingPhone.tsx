"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  topPhone: string;
  bottomPhone: string;
};

const FloatingPhone = ({ topPhone, bottomPhone }: Props) => {
  const randomAnimation = Math.random() > 0.5 ? true : false;

  console.log("in floating phone", topPhone, bottomPhone);

  return (
    <div className="relative h-[500px] w-[500px]">
      <motion.div
        initial={{
          y: randomAnimation ? -100 : 0,
          x: randomAnimation ? 0 : 100,
          opacity: 0,
        }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 10,
          delay: 0.3,
        }}
        whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }}
        className="absolute bottom-28 left-20 w-[200px] md:left-32 md:w-[270px] lg:bottom-36 lg:left-72 lg:w-[350px] "
      >
        <Image
          src={topPhone}
          width={1000}
          height={1000}
          alt="TopPhone"
          priority
        />
      </motion.div>
      <motion.div
        initial={{
          y: randomAnimation ? 100 : 0,
          x: randomAnimation ? 0 : -100,
          opacity: 0,
        }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{
          duration: 3,
          delay: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{ scale: 1.05, rotate: -5, transition: { duration: 0.2 } }}
        className="absolute -left-11 bottom-0 w-[200px] md:w-[270px] lg:bottom-0 lg:left-0 lg:w-[350px]"
      >
        <Image
          src={bottomPhone}
          width={1000}
          height={1000}
          alt="BottomPhone"
          priority
        />
      </motion.div>
    </div>
  );
};

export default FloatingPhone;
