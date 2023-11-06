import { IService } from "../components/home/PopularServices/PopularServices";
import Service from "../components/shared/Service";
import Loading from "../components/utility/Loading";
import GetServices from "../loader/GetServices";

const Services = () => {
  const { data: services, isLoading } = GetServices();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {services?.map((service: IService) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
