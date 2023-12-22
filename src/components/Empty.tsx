import { motion } from "framer-motion";
import Cactus from "../assets/cactus.svg?react";

export const Empty = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 200, scale: 1.2 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="flex flex-col items-center gap-6 mt-16 text-dark-gray/87 dark:text-white/87"
    >
      <Cactus />
      <p className="heading-s dark:text-white text-center">
        No tasks left, just like my lonely desert.
      </p>
    </motion.div>
  );
};
