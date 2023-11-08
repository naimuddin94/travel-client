import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/utility/Loading";
import { IService } from "../types/Types";
import Service from "../components/shared/Service";
import Title from "../components/utility/Title";

const SearchResult = () => {
  const axiosSecure = useAxiosSecure();
  const { state } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["searchResults"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/search?value=${state}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-8">
        <Title>
          <h2 className="text-2xl md:text-3xl mb-2 font-black text-slate-500">
            Result for {state}
          </h2>
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

export default SearchResult;
