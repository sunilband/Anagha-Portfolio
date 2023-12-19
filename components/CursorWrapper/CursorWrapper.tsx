"use client";
import React from "react";
import { useRef, useEffect } from "react";
import Header from "../header";
import StickyCursor from "../stickyCursor";

type Props = {};

const CursorWrapper = (props: Props) => {
  const stickyElement = useRef(null);
  return (
    <div className="max-w-screen">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
};

export default CursorWrapper;
