import { FormEvent } from "react";
import Input from "../components/utility/Input";
import useAuthInfo from "../hooks/useAuthInfo";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";


const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const { user, name, photo } = useAuthInfo();

  const { mutateAsync } = useMutation({
    mutationFn: async (service: any) => {
      const res = await axiosSecure.post("/services", service);
      return res.data;
    },
  });

  const handleProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const serviceName: string = form.serviceName.value;
    const image: string = form.image.value;
    const tourArea: string = form.tourArea.value;
    const price: string = form.price.value;
    const description: string = form.description.value;
    const service = {
      serviceName,
      image,
      tourArea,
      price,
      description,
      providerImage: photo,
      providerName: name,
      providerEmail: user?.email,
    };

    try {
      await mutateAsync(service);
      toast.success("Service added successfully");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
        <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
          {/* <!-- Title --> */}
          <h1 className="text-center text-3xl font-black text-slate-500 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  mb-8 text-gradient">
            Add Service
          </h1>
          {/* <!-- End Title --> */}

          {/* <!-- Form --> */}
          <form onSubmit={handleProduct}>
            <Input name="serviceName">Service Name</Input>
            <Input name="image">Photo URL</Input>
            <Input name="tourArea">Tour Area</Input>
            <Input name="price">Price</Input>
            <textarea
              name="description"
              placeholder="Product description"
              className="textarea textarea-bordered textarea-lg w-full bg-pink-50 mt-2 text-sm min-h-[8rem] focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button type="submit" className="custom-btn w-full mt-5">
              Add Service
            </button>
          </form>
          {/* <!-- End Form --> */}
        </div>
      </div>

      <div className="hidden md:block bg-pink-500/20 bg-blend-overlay md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1587302525159-2363f54affd4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover"></div>
      {/* <!-- End Col --> */}
    </div>
  );
};

export default AddService;
