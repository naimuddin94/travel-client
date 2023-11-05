import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetServices = () => {
  const result = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services.json");
      return res.data;
    },
  });

  return result;
};

export default GetServices;
