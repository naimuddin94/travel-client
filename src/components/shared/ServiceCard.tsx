import { Link } from "react-router-dom";
import { IServiceProps } from "../../types/Types";
import { motion } from "framer-motion";

const ServiceCard = ({ service }: IServiceProps) => {
  const {
    _id,
    image,
    serviceName,
    description,
    providerImage,
    providerName,
    tourArea,
    price,
  } = service;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -200, rotate: -50 }}
      whileInView={{ x: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className=" rounded-xl shadow"
    >
      <div className="relative">
        <img className="rounded-t-lg w-full h-52" src={image} alt="" />
        <p className="py-1 px-4 rounded-full backdrop-blur-3xl text-white absolute bottom-2 right-2 shadow-xs shadow-[#F85E9F] text-sm font-semibold">
          {tourArea}
        </p>
      </div>
      <div className="p-3 flex flex-col justify-between h-64">
        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
            {serviceName}
          </h5>
        </div>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          {description.slice(0, 100)}
        </p>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-9 h-9"
            src={providerImage}
            alt="profile picture"
          />
          <div className="">
            <div className="font-semibold text-gray-500">{providerName}</div>
            <div className="text-sm text-gray-500">Provider</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-600">${price}</span>
          <Link to={`/service/${_id}`}>
            <button className="custom-btn gradient">Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
