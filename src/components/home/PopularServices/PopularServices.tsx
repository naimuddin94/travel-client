import GetServices from "../../../loader/GetServices";
import ServiceCard from "../../shared/ServiceCard";
import Loading from "../../utility/Loading";

export interface IService {
  _id: string;
  image: string;
  placeName: string;
  description: string;
  providerImage: string;
  providerName: string;
  tourArea: string;
  price: number;
}

const PopularServices = () => {
  const { data: services, isLoading } = GetServices();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="common-padding py-10">
      <div className="pb-6">
        <h5 className="theme-text uppercase font-semibold">Popular Destination</h5>
        <h1 className="text-3xl md:text-4xl font-black">
          Explore popular destination
        </h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 ">
        {services?.map((service: IService) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center py-10">
        <button className="custom-btn px-8">
          Show All
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
