import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useAuthInfo from "../hooks/useAuthInfo";

const GetServicesByEmail = (pathname: string, queryName: string) => {
  const { user } = useAuthInfo();
  const result = useQuery({
    queryKey: [queryName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/${pathname}?email=${user?.email}`);
      return res.data;
    },
  });

  return result;
};

export default GetServicesByEmail;
