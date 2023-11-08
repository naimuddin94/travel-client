import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const GetServices = () => {
  const axiosSecure = useAxiosSecure();
  const result = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosSecure("/services");
      return res.data;
    },
  });

  return result;
};

export default GetServices;
