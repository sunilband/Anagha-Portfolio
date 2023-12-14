import { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic";
import "./Index.css";

const Header = forwardRef(function index(props, ref) {
  return (
    <div className={`${styles.header} flex items-center `}>
      <Magnetic>
      <div className="toggle-switch scale-50 mr-[-20px]">
        <label className="switch-label">
          <input type="checkbox" class="checkbox" />
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
