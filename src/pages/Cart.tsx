import useBookings from "../hooks/useBookings";
import { IService } from "../types/Types";

const Cart = () => {
  const { services, isLoading } = useBookings();

  return (
    <div className="pt-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {services?.map((service: IService, index: number) => (
              <tr key={service._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={service.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.serviceName}</div>
                      <div className="text-sm opacity-50">
                        {service.tourArea}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {service.serviceName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {service.tourArea}
                  </span>
                </td>
                <td>${service.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
