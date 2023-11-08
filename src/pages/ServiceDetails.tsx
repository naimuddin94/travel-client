import { useLoaderData } from "react-router-dom";
import { IService } from "../types/Types";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuthInfo from "../hooks/useAuthInfo";
import { toast } from "react-toastify";
import { FormEvent, useState, useEffect } from "react";
import { MdAttachEmail } from "react-icons/md";

const ServiceDetails = () => {
  const [modal, setModal] = useState() as any;
  useEffect(() => {
    const modalElement = document.getElementById("purchase_modal") as any;
    setModal(modalElement);
  }, []);

  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const service: IService = useLoaderData() as IService;
  const {
    image,
    serviceName,
    description,
    providerImage,
    tourArea,
    providerEmail,
    providerName,
    price,
  } = service;

  const handleBookingForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...serviceObj } = service;
    const form = e.target as HTMLFormElement;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const bookingService = {
      ...serviceObj,
      userEmail: user?.email,
      date,
      instruction,
      status: "pending",
    };

    axiosSecure
      .post("/booking", bookingService)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Booking successfully");
          // modal.removeAttribute("open");
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-6">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src={image}
                alt="Image Description"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="sm:order-1">
            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-pink-200 text-gray-800">
              {tourArea}
            </p>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
              {serviceName}
            </h2>
            <p>{description}</p>
            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-2xl md:text-4xl font-black bg-pink-200 mt text-gray-800">
              ${price}
            </p>
            {/* <!-- Avatar --> */}
            <div className="mt-6 sm:mt-10 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full"
                  src={providerImage}
                  alt="Image Description"
                />
              </div>

              <div className="ml-3 sm:ml-4">
                <p className="sm:mb-1 font-semibold text-gray-800">
                  {providerName}
                </p>
                <p className="text-xs text-gray-500">Provider</p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}

            <div className="mt-5">
              <button onClick={() => modal.showModal()} className="custom-btn">
                Book Now
              </button>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="purchase_modal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl relative">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <form onSubmit={handleBookingForm} className="card-body flex-1">
              <h2 className="text-slate-400 flex gap-1 items-center">
                <MdAttachEmail />
                {user?.email}
              </h2>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    readOnly
                    name="serviceName"
                    value={serviceName}
                    type="text"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    readOnly
                    value={price}
                    type="text"
                    name="price"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Provider Email</span>
                  </label>
                  <input
                    readOnly
                    name="providerEmail"
                    value={providerEmail}
                    type="text"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <textarea
                  name="instruction"
                  placeholder="Give instruction here..."
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  className="custom-btn-two w-full rounded-md"
                >
                  Purchase this Service
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="absolute top-1 right-1">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle shadow-md">❌</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ServiceDetails;
