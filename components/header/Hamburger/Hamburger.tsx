import React from "react";
import Image from "next/image";
import crossLogo from "../../../public/cross.svg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "../Index.css";
import { useModeContext } from "../../../context/DarkModeContext";

type Props = {
  navVisible: boolean;
  setNavVisible: (navVisible: boolean) => void;
};

const Hamburger = ({ navVisible, setNavVisible }: Props) => {
  const { mode } = useModeContext();
  return (
    <div className={`overflow-y-hidden`}>
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ scale: 1, x: 100, y: -290, overflow: "auto" }}
            whileInView={{ scale: 1, x: 0, y: 0, overflow: "hidden" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            exit={{
              y: -290,
              x: 170,
              scale: 0,
              transformOrigin: "top",
              rotate: 180,
            }}
            className={`max-w-screen absolute right-0 top-0 z-20 h-screen max-h-screen w-[70vw] select-none overflow-hidden rounded-l-full
            bg-white shadow-2xl sm:w-[30vw]`}
            style={{
              mixBlendMode: mode.darkMode ? "difference" : "screen",
              backdropFilter:
                "blur(30px) saturate(180%) contrast(80%) brightness(80%)",
              WebkitBackdropFilter: "blur(30px)",
            }}
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
                className="absolute right-5 top-12 cursor-pointer select-none sm:right-12 sm:top-8"
                onClick={() => setNavVisible(false)}
              />
            </motion.div>

            <div className="z-50 ml-20 flex h-full flex-col items-center justify-center ">
              <div className="noHighlight z-50 flex flex-col justify-center gap-4 text-[2em] font-bold tracking-wide">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400,
                  }}
                  whileHover={{
                    scale: 1.1,
                    x: -10,
                    transition: { duration: 0.1 },
                    shadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <Link
                    href="/"
                    className="fiexenFont text-black"
                    onClick={() => setNavVisible(false)}
                  >
                    <span className="montserratFont mr-2 text-[0.3em] text-black">
                      01
                    </span>
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                  }}
                  whileHover={{
                    scale: 1.1,
                    x: -10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/projects"
                    className="fiexenFont text-black"
                    onClick={() => setNavVisible(false)}
                  >
                    <span className="montserratFont mr-2 text-[0.3em] text-black">
                      02
                    </span>
                    Work
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 400,
                  }}
                  whileHover={{
                    scale: 1.1,
                    x: -10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/about"
                    className="fiexenFont text-black"
                    onClick={() => setNavVisible(false)}
                  >
                    <span className="montserratFont mr-2 text-[0.3em] text-black">
                      03
                    </span>
                    About
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                  }}
                  whileHover={{
                    scale: 1.1,
                    x: -10,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    href="/contact"
                    className="fiexenFont text-black"
                    onClick={() => setNavVisible(false)}
                  >
                    <span className="montserratFont mr-2 text-[0.3em] text-black">
                      04
                    </span>
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
