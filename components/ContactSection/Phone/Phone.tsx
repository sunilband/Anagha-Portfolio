"use client";
import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "./Phone.css";
import { motion } from "framer-motion";

type Props = {};

const Phone = (props: Props) => {
  return (
    <DeviceFrameset device="iPhone X">
      {/* create a form */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="barlowFont h-full w-full bg-slate-100 px-3 pt-20"
      >
        <div className="container">
          <div className="">
            <div className="card-image">
              <h2 className="card-heading">
                Like what you see ?<small>Let talk</small>
              </h2>
            </div>
            <form className="card-form">
              <div className="input">
                <input type="text" className="input-field" />
                <label className="input-label">Full Name</label>
              </div>
              <div className="input">
                <input type="text" className="input-field" />
                <label className="input-label">Email</label>
              </div>
              <div className="input">
                <input type="text" className="input-field" />
                <label className="input-label">Message</label>
              </div>
              <div className="action">
                <button className="action-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </DeviceFrameset>
  );
};

export default Phone;
