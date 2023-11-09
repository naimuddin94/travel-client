import { Link } from "react-router-dom";
import { IServiceProps } from "../../types/Types";
import { motion } from "framer-motion";
import { useState } from "react";

export const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
export const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Service = ({ service }: IServiceProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const {
    _id,
    image,
    serviceName,
    description,
    providerImage,
    tourArea,
    providerName,
    price,
  } = service;

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="group sm:flex items-center justify-center"
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src={image}
          alt="Image Description"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
              {tourArea}
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-[#5D50C6]">
            {serviceName}
          </h3>
          <p className="mt-2 text-gray-600">{description?.slice(0, 100)}</p>

          <h3 className="text-xl sm:text-3xl font-black text-gray-500 py-2 group-hover:text-[#5D50C6] ">
            ${price}
          </h3>
          <Link to={`/service/${_id}`}>
            <button className="custom-btn mb-5">Details</button>
          </Link>
          <div className="mt-5 sm:mt-auto">
            {/* <!-- Avatar --> */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[2.875rem] w-[2.875rem] rounded-full"
                  src={providerImage}
                  alt="Image Description"
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-gray-800">{providerName}</h4>
                <p className="text-xs text-gray-500">Provider</p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
