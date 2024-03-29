"use client";
import React, { useEffect, useState } from "react";
import { sendEmail } from "../../../utils/apiCalls/sendEmail";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "./Phone.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

type Props = {
  sent: boolean;
  setSent: (value: boolean) => void;
};

const Phone = ({ sent, setSent }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSendEmail = async (e: any) => {
    e.preventDefault();

    if (name && email && message) {
      try {
        const res = await sendEmail({ name, email, message });
        if (res) {
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email sent successfully.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            draggable: true,
            theme: "colored",
            className: "text-2xl font-bold",
          });
          setSent(true);
        } else {
          toast.error("Please fill all fields.");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DeviceFrameset device="iPhone X">
      {/* create a form */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="barlowFont h-full w-full bg-slate-100 px-3 pt-20 "
      >
        <div className="container">
          <div className="">
            <div className="card-image hidden md:block">
              <h2 className="card-heading">
                Like what you see ?<small>Let&apos;s talk</small>
              </h2>
            </div>
            <div className="card-form">
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
                <label className="input-label">Full Name</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="input-label">Email</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label className="input-label">Message</label>
              </div>
              <div className="action relative">
                <button
                  className={`action-button disabled:cursor-not-allowed disabled:opacity-50`}
                  disabled={sent}
                  onClick={handleSendEmail}
                >
                  {sent ? "Email Sent" : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DeviceFrameset>
  );
};

export default Phone;
