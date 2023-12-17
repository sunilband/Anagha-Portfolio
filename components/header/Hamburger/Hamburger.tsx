import React from "react";
import Image from "next/image";
import crossLogo from "../../../public/cross.svg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "../Index.css";

type Props = {
  navVisible: boolean;
  setNavVisible: (navVisible: boolean) => void;
};

const Hamburger = ({ navVisible, setNavVisible }: Props) => {
  return (
    <div className={``}>
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ scale: 1, x: -100 }}
            whileInView={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            exit={{ y: -290, x: 170, scale: 0, transformOrigin: "top" }}
            className="absolute h-screen top-0 right-0 rounded-l-full w-[70vw] sm:w-[30vw] z-20 bg-blend-difference bg-white select-none shadow-2xl
            max-h-screen max-w-screen overflow-hidden
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 0, y: 100, rotate: 180 }}
              animate={{
                opacity: 1,
                scale: [0.5, 1, 2, 1],
                rotate: 0,
                x: 0,
                y: 0,
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              exit={{ rotate: 180 }}
            >
              <Image
                src={crossLogo}
                alt="Picture of the author"
                width={50}
                height={50}
                className="absolute sm:top-8 sm:right-12 top-12 right-5 cursor-pointer select-none"
                onClick={() => setNavVisible(false)}
              />
            </motion.div>

            <div className="flex flex-col justify-center items-center h-full z-50 ">
              <div className="flex flex-col justify-center gap-4 text-[2em] z-50 tracking-wide font-bold noHighlight">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1,
                    x:-10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/"
                    className="fiexenFont text-black hover:text-[#0028ff]/70"
                    onClick={() => setNavVisible(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1,
                    x:-10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/projects"
                    className="fiexenFont text-black hover:text-[#0028ff]/70"
                    onClick={() => setNavVisible(false)}
                  >
                    Work
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1,
                    x:-10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/projects"
                    className="fiexenFont text-black hover:text-[#0028ff]/70"
                    onClick={() => setNavVisible(false)}
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1,
                    x:-10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/"
                    className="fiexenFont text-black hover:text-[#0028ff]/70"
                    onClick={() => setNavVisible(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;
