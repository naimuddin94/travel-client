import { TbDiscount2 } from "react-icons/tb";
import { motion } from "framer-motion";

const Helping = () => {
  return (
    <div className="relative pt-20 lg:pt-10 py-10 bg-gradient-to-tl from-[#f85e9e13]">
      <div className="w-72 md:w-96 h-72 md:h-[22rem] bg-[#FACD49] -z-50 absolute rounded-r-full"></div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 relative min-h-[300px] sm:min-h-[320px] md:min-h-[380px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.5, y: -300 }}
            whileInView={{ y: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/assets/project.png"
            alt=""
            className="w-[30rem] absolute -top-24 md:-top-28"
          />
          <div className="absolute -top-12 right-5 md:right-[20%]">
            <img src="/assets/Ellipse14.png" alt="" className="w-16 mx-auto" />
            <div className="flex gap-2 items-center bg-white shadow-md py-2 px-4 rounded-full text-[#FF5722] font-semibold border">
              <TbDiscount2 />
              <h4 className="text-sm text-slate-700">Discounted Price</h4>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 200, rotate: 10 }}
          whileInView={{ x: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-3 ml-auto px-5 lg:pr-10 w-fit text-right lg:text-left"
        >
          <h4 className="theme-text uppercase font-semibold">Travel Point</h4>
          <h1 className="text-3xl md:text-5xl font-black">
            We helping you find <br /> your dream location
          </h1>
          <p className="max-w-md text-sm text-slate-700">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="grid grid-cols-2 gap-4 w-fit ml-auto lg:ml-0">
            <div className="p-3 rounded-md w-fit bg-white shadow text-center">
              <h6 className="text-[#FF5722] font-semibold text-lg">500+</h6>
              <p className="text-xs">Holiday Package</p>
            </div>
            <div className="py-3 px-6 rounded-md w-fit bg-white shadow text-center">
              <h6 className="text-[#FF5722] font-semibold text-lg">60</h6>
              <p className="text-xs">Luxury Hotel</p>
            </div>
            <div className="p-3 rounded-md bg-white w-fit shadow text-center">
              <h6 className="text-[#FF5722] font-semibold text-lg">7</h6>
              <p className="text-xs">Premium Airlines</p>
            </div>
            <div className="p-3 rounded-md bg-white w-fit shadow text-center">
              <h6 className="text-[#FF5722] font-semibold text-lg">2k+</h6>
              <p className="text-xs">Happy Customer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Helping;
