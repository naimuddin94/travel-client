import { ReactNode } from "react";
import { motion } from "framer-motion";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 200, rotate: 10 }}
      whileInView={{ x: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#face4925] max-w-xl mx-auto py-4 md:py-6 px-10 rounded-lg text-center mb-5 relative my-5"
    >
      {children}
      <img
        src="/assets/Graphic_Elements.png"
        alt=""
        className="absolute -top-3 w-24 -left-3"
      />
    </motion.div>
  );
};

export default Title;
