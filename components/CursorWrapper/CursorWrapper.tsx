"use client";
import React from "react";
import Header from "../header";

type Props = {};

const CursorWrapper = (props: Props) => {
  return (
    <div className="max-w-screen">
      <Header />
      {/* <StickyCursor stickyElement={stickyElement} /> */}
    </div>
  );
};

export default CursorWrapper;
