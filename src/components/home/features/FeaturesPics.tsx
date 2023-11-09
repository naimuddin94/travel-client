import {motion} from "framer-motion"

const FeaturesPics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 300 }}
      whileInView={{ x: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex-1 relative"
    >
      <div className="relative">
        <img src="/assets/Rectangle9.png" alt="" className="w-60 md:w-72" />
        <h2 className="py-2 px-4 bg-white shadow rounded-full w-fit font-semibold text-slate-500 absolute top-32 left-16 text-center md:left-52">
          Paradise on Earth
        </h2>
        <img
          src="assets/Rectangle2.png"
          alt=""
          className="w-52 absolute -bottom-16 left-20 md:left-40 pr-5 drop-shadow"
        />
      </div>
    </motion.div>
  );
};

export default FeaturesPics;
