import Swal from "sweetalert2";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { IServiceProps } from "../../types/Types";

const MyServiceCard = ({ service }: IServiceProps) => {
  const {
    _id,
    image,
    serviceName,
    description,
    providerEmail,
    tourArea,
    price,
    status,
  } = service;
  const [loadedStatus, setLoadedStatus] = useState<string | undefined>(status);
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthInfo();

  const { mutateAsync } = useMutation({
    mutationFn: async (id: string | undefined) => {
      const res = await axiosSecure.delete(
        `/services/${id}?email=${user?.email}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myServices"] as InvalidateQueryFilters);
    },
  });

  const { mutateAsync: deleteBookingAsync } = useMutation({
    mutationFn: async (id: string | undefined) => {
      const res = await axiosSecure.delete(
        `/delete-booking/${id}?email=${user?.email}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"] as InvalidateQueryFilters);
    },
  });

  const handleDelete = (id: string | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);
          Swal.fire({
            title: "Deleted!",
            text: "Service deleted successfully.",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleDeleteBooking = (id: string | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBookingAsync(id);
          Swal.fire({
            title: "Deleted!",
            text: "Deleted successfully.",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleStatus = (status: string | undefined, id: string | undefined) => {
    axiosSecure
      .put(`/update-status/${id}?email=${user?.email}&status=${status}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Status updated successfully");
          setLoadedStatus(status);
        }
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200, rotate: 10 }}
        whileInView={{ x: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="group rounded-xl"
      >
        <div className="sm:flex">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
              src={image}
              alt={serviceName}
            />
          </div>

          <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0 flex flex-col justify-between py-1">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              {serviceName}
            </h3>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-700">${price}</h2>
              <p className="text-xs bg-slate-100 shadow-md rounded-full py-1 px-3">
                {tourArea}
              </p>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {description?.slice(0, 70)}
            </p>
            <div>
              {user?.email === providerEmail &&
                pathname !== "/my-schedules" && (
                  <>
                    <Link to={`/update-service/${_id}`}>
                      <button className="custom-btn mr-2">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="custom-btn bg-[#FF5722]"
                    >
                      Delete
                    </button>
                  </>
                )}
              {pathname === "/my-schedules" &&
                providerEmail === user?.email && (
                  <div className="dropdown dropdown-bottom">
                    <label
                      tabIndex={0}
                      className={`m-1 custom-btn ${
                        loadedStatus === "completed"
                          ? "bg-[#5D50C6]"
                          : "bg-[#F85E9F]"
                      }`}
                    >
                      {loadedStatus}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li onClick={() => handleStatus("pending", _id)}>
                        <a>Pending</a>
                      </li>
                      <li onClick={() => handleStatus("progress", _id)}>
                        <a>Progress</a>
                      </li>
                      <li onClick={() => handleStatus("completed", _id)}>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </div>
                )}
              {pathname === "/my-schedules" &&
                providerEmail !== user?.email && (
                  <>
                    <button className="custom-btn mr-2">{loadedStatus}</button>
                    <button
                      onClick={() => handleDeleteBooking(_id)}
                      className="custom-btn-two hover:bg-[#F85E9F]"
                    >
                      Delete
                    </button>
                  </>
                )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyServiceCard;
