import { IServiceProps } from "../../types/Types";


const MyServiceCard = ({ service }: IServiceProps) => {
  const {
    _id,
    image,
    serviceName,
    description,
    providerImage,
    tourArea,
    price,
  } = service;

  return (
    <div className="group rounded-xl overflow-hidden">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
            src={image}
            alt={serviceName}
          />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0 flex flex-col justify-between py-1">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            {serviceName}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {description}
          </p>
          <button className="custom-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
