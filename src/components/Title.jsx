import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Title = ({ title }) => {
  const textRef = useRef(null);

  const inView = useInView(textRef, { once: true });

  return (
    <div
      ref={textRef}
      className="bg-[#FF6666] w-fit m-auto my-5 overflow-hidden"
    >
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: inView ? 0 : -200,
          opacity: inView ? 1 : 0,
          transition: { duration: 1 },
        }}
        className="text-4xl font-bold py-3 px-7 text-white"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Title;
