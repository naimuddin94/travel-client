import { FormEvent } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuthInfo from "../hooks/useAuthInfo";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateService = () => {
  const service: any = useLoaderData();

  const { _id, image, serviceName, description, tourArea, price } = service;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthInfo();

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const area = form.area.value;
    const newPrice = form.newPrice.value;
    const newPhoto = form.newPhoto.value;
    const newName = form.newName.value;
    const newDescription = form.newDescription.value;

    const updateService = {
      area,
      newPrice,
      newPhoto,
      newName,
      newDescription,
    };

    axiosSecure
      .put(`/services/${_id}?email=${user?.email}`, updateService)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Updated successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative">
      <div className="absolute -z-50 right-0 bottom-0">
        <img src="/assets/OBJECTS.png" alt="" />
      </div>
      <div className="absolute -z-50 left-28 top-4">
        <img src="/assets/Ellipse14.png" alt="" />
      </div>
      <div className="absolute -z-50 opacity-10">
        <img src="/assets/Vector.png" alt="" />
      </div>
      <div className="w-11/12 max-w-4xl mx-auto my-20 relative bg-gradient-to-l from-pink-50 p-10 rounded-lg shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <form onSubmit={handleUpdate} className="card-body flex-1 py-0">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="form-control flex-[3]">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  name="area"
                  defaultValue={tourArea}
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-[2]">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  defaultValue={price}
                  type="text"
                  name="newPrice"
                  placeholder="price"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="newPhoto"
                  defaultValue={image}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={serviceName}
                  name="newName"
                  placeholder="service name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <textarea
                defaultValue={description}
                name="newDescription"
                placeholder="Give instruction here..."
                className="textarea textarea-bordered textarea-md w-full"
              ></textarea>
            </div>
            <div className="form-control mt-3">
              <button
                type="submit"
                className="custom-btn-two w-full rounded-md"
              >
                Update this Service
              </button>
            </div>
          </form>
        </div>
        <div className="absolute -top-4 -right-4">
          <Link to="/my-services">
            <button className="btn btn-circle shadow-md ring-[1px] ring-pink-500">
              ❌
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
