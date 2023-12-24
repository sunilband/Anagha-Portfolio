// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import "./Background.css";
import { useModeContext } from "../../context/DarkModeContext";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "@/context/BgAnimationTrigger";

const ORB_COUNT = 20;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const iterate = (count, mapper) =>
  [...new Array(count)].map((_, i) => mapper(i));
const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

const Gooey = ({ id }) => (
  <filter id={id}>
    <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
    <feColorMatrix
      in="blur"
      mode="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -5"
      result="goo"
    />
    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
  </filter>
);

const Blur = ({ id }) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
  </filter>
);

const Gradient = ({ id, hue }) => {
  const h = hue + random(-40, 40);
  const f = [h, 80, 60];
  const t = [h + 20, 100, 30];
  return (
    <linearGradient id={id} x1="70%" x2="0%" y1="70%" y2="0%">
      <stop
        offset="0%"
        stopColor={`hsl(${t[0]},${t[1]}%,${t[2]}%)`}
        stopOpacity="1"
      />
      <stop
        offset="100%"
        stopColor={`hsl(${f[0]},${f[1]}%,${f[2]}%)`}
        stopOpacity="1"
      />
    </linearGradient>
  );
};

const Orb = ({ hue }) => {
  const r = random(30, 100);
  const from = [random(0 - r, 1000 + r), random(0 - r, 1000 + r)];
  const to = [random(0 - r, 1000 + r), random(0 - r, 1000 + r)];
  const d = distance(from, to);
  const id = random(0, 1000);

  const { restart, setRestart } = useAnimationContext();
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    if (restart) {
      setAnimationTriggered(true);
    } else {
      setAnimationTriggered(false);
    }
  }, [restart]);

  const [cx, setCx] = useState(from[0]);

  useEffect(() => {
    setCx(from[0]);
  }, []);

  return (
    <>
      <motion.circle
        initial={{ x: random(-100, 100), y: random(-100, 100), scale: 0 }}
        animate={
          animationTriggered
            ? { x: 0, y: 0, scale: 1 }
            : { x: random(-500, 500), y: random(-500, 500), scale: 1 }
        }
        transition={{
          duration: 3,
          delay: random(0, 1),
          ease: "easeInOut",
          type: "spring",
          damping: 7,
        }}
        cx={from[0]}
        cy={to[0]}
        r={r}
        fill={`url(#grad-${id})`}
        style={{
          "--duration": `${d / 15}s`,
          "--from-x": from[0],
          "--from-y": from[1],
          "--to-x": to[0],
          "--to-y": to[1],
        }}
      />
      <Gradient id={`grad-${id}`} hue={hue} />
    </>
  );
};

const Orbs = memo(({ hue }) => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMinYMin slice"
      style={{
        background: `linear-gradient(hsl(${hue},${80}%,${90}%), hsl(${hue},${100}%,${80}%))`,
      }}
    >
      <g filter="url(#blur)">
        <g filter="url(#gooey)">
          {iterate(ORB_COUNT, (i) => (
            <Orb key={i} hue={hue} />
          ))}
        </g>
      </g>
      <defs>
        <Gooey id="gooey" />
        <Blur id="blur" />
      </defs>
    </svg>
  );
});

Orbs.displayName = "Orbs"; // Add display name to the component

type Props = {};

const Background = (props: Props) => {
  const [hue, setHue] = useState(60);
  // 73
  const { mode, setMode } = useModeContext();
  const { restart, setRestart } = useAnimationContext();

  useEffect(() => {
    if (mode.darkMode) setHue(random(0, 360));
    if (restart) setHue(random(0, 360));
  }, [mode, restart]);

  console.log(hue);

  return (
    <>
      <main
        className={`fragment absolute -z-10 max-h-screen overflow-hidden ${
          mode.darkMode ? "grayscale" : ""
        }`}
      >
        <Orbs hue={hue} />
      </main>
    </>
  );
};

export default Background;
