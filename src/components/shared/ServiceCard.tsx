import { IService } from "../home/PopularServices/PopularServices";

interface IServiceProps {
  service: IService;
}

const ServiceCard = ({ service }: IServiceProps) => {
  const {
    _id,
    image,
    placeName,
    description,
    providerImage,
    providerName,
    tourArea,
    price,
  } = service;
  return (
    <div className=" rounded-xl shadow">
      <div className="relative">
        <img className="rounded-t-lg w-full h-52" src={image} alt="" />
        <p className="py-1 px-4 rounded-full backdrop-blur-3xl text-white absolute bottom-2 right-2 shadow-xs shadow-[#F85E9F] text-sm font-semibold">
          {tourArea}
        </p>
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {placeName}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center py-5 gap-4">
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
          <button className="custom-btn gradient">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
