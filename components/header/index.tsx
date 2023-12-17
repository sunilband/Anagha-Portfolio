// @ts-nocheck
"use client";
import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic";
import "./Index.css";
import { useModeContext } from "../../context/DarkModeContext";
import Hamburger from "./Hamburger/Hamburger";

const Header = forwardRef(function Index(props, ref) {
  const { mode, setMode } = useModeContext();
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="relative">
      <div className={`${styles.header} flex items-center`}>
        <Magnetic>
          <div className="toggle-switch scale-50 mr-[-30px]">
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
      </div>
          <Hamburger navVisible={navVisible} setNavVisible={setNavVisible} />
    </div>
  );
});

export default Header;
