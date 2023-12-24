import React from "react";
import AnimatedCursor from "react-animated-cursor";

type Props = {};

const Cursor = (props: Props) => {
  return (
    <div className="hidden sm:block">
      <AnimatedCursor
        trailingSpeed={10}
        innerSize={25}
        outerSize={35}
        innerScale={2}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #000",
        }}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        clickables={["a", "button", ".link", "span", "hoversection"]}
      />
    </div>
  );
};

export default Cursor;
