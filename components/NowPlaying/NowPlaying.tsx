"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const NowPlaying = (props: Props) => {
  const spotifyProfileImage = process.env.NEXT_PUBLIC_NOW_PLAYING_URL || "";
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    fetch(spotifyProfileImage)
      .then((res) => res.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        console.log(objectURL);
        setImage(objectURL);
      });
  }, []);

  return (
    <>
      {image && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className="text-white"
        >
          <p className="montserratFont ml-5 text-center text-lg tracking-widest text-white">
            Now Playing
          </p>
          <div className="rounded-xl bg-black/80">
            <Image
              src={image}
              alt="Now playing"
              priority
              width={1000}
              height={200}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NowPlaying;
