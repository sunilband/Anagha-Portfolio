// @ts-nocheck
"use client";
import { forwardRef, useState, useRef } from "react";
import styles from "./style.module.scss";
import "./Index.css";
import { useModeContext } from "../../context/DarkModeContext";
import Hamburger from "./Hamburger/Hamburger";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { motion } from "framer-motion";
import { useDataContext } from "../../context/DataContext";
import Link from "next/link";

const Header = forwardRef(function Index(props, ref) {
  const audioRef = useRef(null);
  const { mode, setMode } = useModeContext();
  const [navVisible, setNavVisible] = useState(false);
  const { data } = useDataContext();
  const { rendered } = data;

  return rendered ? (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 100 },
        }}
        className="absolute left-4 top-[40px] z-50"
      >
        <Link href="/" prefetch={true}>
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            className="z-[1000]"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 100 },
        }}
        className={`${styles.header} flex items-center gap-10`}
      >
        <div className="toggle-switch mr-[-30px] scale-50">
          <label className="switch-label">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => {
                setMode({ darkMode: !mode.darkMode });
                audioRef.current.play();
              }}
            />
            <audio ref={audioRef} src="/switch.mp3" />
            <div className="slider"></div>
          </label>
        </div>

        <span
          className={`${styles.burger} mr-8`}
          onClick={() =>
            navVisible ? setNavVisible(false) : setNavVisible(true)
          }
        >
          <div ref={ref} className={styles.bounds}></div>
        </span>
      </motion.div>
      <Hamburger navVisible={navVisible} setNavVisible={setNavVisible} />
    </div>
  ) : null;
});

export default Header;
