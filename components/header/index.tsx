// @ts-nocheck
"use client";
import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic";
import "./Index.css";
import { useModeContext } from "../../context/DarkModeContext";
import Hamburger from "./Hamburger/Hamburger";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = forwardRef(function Index(props, ref) {
  const { mode, setMode } = useModeContext();
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 100 },
        }}
        className="absolute left-4 top-[40px] z-auto"
      >
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="logo"
          className="z-50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 100 },
        }}
        className={`${styles.header} flex items-center`}
      >
        <Magnetic>
          <div className="toggle-switch mr-[-30px] scale-50">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => {
                  setMode({ darkMode: !mode.darkMode });
                }}
              />
              <span className="slider"></span>
            </label>
          </div>
        </Magnetic>

        <div
          className={styles.burger}
          onClick={() =>
            navVisible ? setNavVisible(false) : setNavVisible(true)
          }
        >
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </motion.div>
      <Hamburger navVisible={navVisible} setNavVisible={setNavVisible} />
    </div>
  );
});

export default Header;
