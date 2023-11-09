import {motion} from "framer-motion"

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 200 }}
      whileInView={{ x: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative py-5"
    >
      <img src="/assets/sign.png" alt="" className="absolute w-12 -top-20" />
      <div className="flex flex-wrap gap-4 justify-center lg:justify-between common-padding">
        <img src="/assets/Group05.png" alt="" className="h-4 md:h-8" />
        <img src="/assets/Group04.png" alt="" className="h-4 md:h-8" />
        <img src="/assets/Group03.png" alt="" className="h-4 md:h-8" />
        <img src="/assets/Group02.png" alt="" className="h-4 md:h-8" />
        <img src="/assets/Group01.png" alt="" className="h-3 md:h-6" />
      </div>
    </motion.div>
  );
};

export default Partners;
