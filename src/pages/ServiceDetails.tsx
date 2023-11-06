import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
            />
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:order-1">
          <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-pink-200 text-gray-800">
            Business insight
          </p>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
            How to get buy-in and
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi
            ad non velit, rerum obcaecati aperiam fuga excepturi pariatur
            repellendus.
          </p>
          <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-2xl md:text-4xl font-black bg-pink-200 mt text-gray-800">
            $80
          </p>
          {/* <!-- Avatar --> */}
          <div className="mt-6 sm:mt-10 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 sm:h-14 sm:w-14 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>

            <div className="ml-3 sm:ml-4">
              <p className="sm:mb-1 font-semibold text-gray-800">
                Louise Donadieu
              </p>
              <p className="text-xs text-gray-500">
                Strategic Marketing Consultant
              </p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}

          <div className="mt-5">
            <button className="custom-btn">Book Now</button>
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default ServiceDetails;
