import { Link } from "react-router-dom";
import GetServices from "../../../loader/GetServices";
import ServiceCard from "../../shared/ServiceCard";
import Loading from "../../utility/Loading";
import { IService } from "../../../types/Types";
import { motion } from "framer-motion";

const PopularServices = () => {
  const { data: services, isLoading } = GetServices();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="common-padding py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 200 }}
        whileInView={{ x: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="pb-6"
      >
        <h5 className="theme-text uppercase font-semibold">
          Popular Destination
        </h5>
        <h1 className="text-3xl md:text-4xl font-black">
          Explore popular destination
        </h1>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {services?.slice(0, 4).map((service: IService) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center py-10">
        <Link to="/services">
          <button className="custom-btn px-8">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
