"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const NowPlaying = (props: Props) => {
  const spotifyProfileImage =
    "/api/view?uid=85omxvbmid40xijy76e4j5lb0&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false";
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    // the fetch request will return a svg
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
        >
          <p className="montserratFont ml-5 text-lg text-white">Now Playing</p>
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
