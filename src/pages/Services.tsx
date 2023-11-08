import { useNavigate } from "react-router-dom";
import Service from "../components/shared/Service";
import Loading from "../components/utility/Loading";
import GetServices from "../loader/GetServices";
import { IService } from "../types/Types";
import { FormEvent } from "react";
import Title from "../components/utility/Title";

const Services = () => {
  const navigate = useNavigate();
  const { data, isLoading } = GetServices();

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = form.query.value;
    const searchValue = query.trim();
    if (searchValue) {
      navigate("/search-result", { state: searchValue });
    }
  };

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-8">
        <Title>
          <h2 className="text-3xl md:text-4xl mb-2 font-black text-slate-500">
            Services
          </h2>

          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <input
              name="query"
              type="text"
              placeholder="Search services"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <button className="custom-btn rounded-md h-10 md:h-12">
              Search
            </button>
          </form>
        </Title>
        <div className="grid lg:grid-cols-2 gap-6">
          {data?.map((service: IService) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
