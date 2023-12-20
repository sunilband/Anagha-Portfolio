// src/components/HOC/PageAnimations/PageAnimatePresence/index.tsx

"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import FrozenRoute from "./FrozenRoute";

const PageAnimatePresence: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
