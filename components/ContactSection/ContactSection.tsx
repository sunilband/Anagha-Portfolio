import React from "react";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div>
      <span
        style={{
          letterSpacing: "5px", // Adjust the value to control the spacing between all letters
          display: "inline-block", // Prevents the width of the container from collapsing
          transform: "scaleX(2)", // Adjust the value to control the stretching of the first letter
        }}
      >
        H
      </span>
    </div>
  );
};

export default ContactSection;
