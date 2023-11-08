import MyServiceCard from "../components/MyServices/MyServiceCard";
import Loading from "../components/utility/Loading";
import Title from "../components/utility/Title";
import GetServicesByEmail from "../loader/GetServicesByEmail";
import { IService } from "../types/Types";

const MyServices = () => {
  const { data: services, isLoading } = GetServicesByEmail(
    "user-services",
    "myServices"
  );

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Title>
          <h1 className="text-2xl md:text-3xl mb-2 font-black text-slate-500">
            My Services
          </h1>
        </Title>
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {services?.map((service: IService) => (
            <MyServiceCard key={service._id} service={service} />
          ))}
        </div>
        {services?.length === 0 && (
          <div>
            <h2 className="text-lg text-slate-400 font-semibold text-center py-9">
              You have no services
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServices;
