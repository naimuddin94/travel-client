import { Link } from "react-router-dom";
import MyServiceCard from "../components/MyServices/MyServiceCard";
import Loading from "../components/utility/Loading";
import Title from "../components/utility/Title";
import useBookings from "../hooks/useBookings";
import GetServicesByEmail from "../loader/GetServicesByEmail";
import { IService } from "../types/Types";

const MySchedules = () => {
  const { services, isLoading } = useBookings();
  const { data: orders } = GetServicesByEmail("orders", "orders");

  if (isLoading) {
    <Loading />;
  }

  const totalPrice: number = services.reduce(
    (acc: number, curr: IService) => acc + parseFloat(curr.price),
    0
  );

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Title>
          <h1 className="text-2xl md:text-3xl mb-2 font-black text-slate-500">
            My Bookings
          </h1>
          <h1 className="text-xl font-bold mx-auto w-fit text-slate-500">
            Total price: {totalPrice}
          </h1>
          <Link to="/payment">
            <button className="custom-btn-two py-1 mt-2">Checkout</button>
          </Link>
        </Title>
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {services?.map((service: IService) => (
            <MyServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div>
          {services?.length === 0 && (
            <div>
              <h2 className="text-lg text-slate-400 font-semibold text-center py-9">
                You have no schedule
              </h2>
            </div>
          )}
        </div>
        <div>
          <Title>
            <h1 className="text-2xl md:text-3xl mb-2 font-black text-slate-500">
              My Orders
            </h1>
          </Title>
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {orders?.map((service: IService) => (
              <MyServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div>
            {orders?.length === 0 && (
              <div>
                <h2 className="text-lg text-slate-400 font-semibold text-center py-9">
                  You have no orders
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
