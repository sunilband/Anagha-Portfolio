"use client"
import { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../Magnetic";
import "./Index.css";
import { useModeContext } from "../../context/DarkModeContext";

const Header = forwardRef(function Index(props, ref) {
  const { mode, setMode } = useModeContext();
  return (
    <div className={`${styles.header} flex items-center `}>
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
      <Magnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
