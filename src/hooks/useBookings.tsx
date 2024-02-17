import GetServicesByEmail from "../loader/GetServicesByEmail";

const useBookings = () => {
  const {
    data: services = [],
    isLoading,
    refetch,
  } = GetServicesByEmail("booking", "bookings");
  return { services, isLoading, refetch };
};

export default useBookings;
