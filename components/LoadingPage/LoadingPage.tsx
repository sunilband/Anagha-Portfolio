"use client";
import React from "react";
import "./LoadingPage.css";
import { motion } from "framer-motion";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <motion.div
      exit={{
        opacity: 0,
        y: -100,
        transition: { duration: 0.3 },
      }}
      className="flex h-screen w-screen flex-col items-center justify-center bg-slate-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="loading"
      >
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
      </motion.div>
      <motion.p
        //   make loop animation for text
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          repeatType: "loop",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        exit={{
          opacity: 0,
          x: -100,
          transition: { duration: 0.3 },
        }}
        className="trainFont text-[2em]"
      >
        Pushing Some Pixels
      </motion.p>
    </motion.div>
  );
};

export default LoadingPage;
