import MyServiceCard from "../components/MyServices/MyServiceCard";
import Loading from "../components/utility/Loading";
import GetServices from "../loader/GetServices";
import { IService } from "../types/Types";

const MySchedules = () => {
  const { data: services, isLoading } = GetServices();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <!-- Card Blog --> */}
      <div className="mt-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {services?.map((service: IService) => (
            <MyServiceCard key={service._id} service={service} />
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  );
};

export default MySchedules;
