const Why = () => {
  return (
    <div>
      <div className="lg:grid gap-5 grid-cols-10 justify-between items-center common-padding py-8">
        <div className="col-span-4 text-center lg:text-left">
          <h4 className="font-semibold theme-text uppercase">Why Us</h4>
          <h1 className="text-4xl font-black">
            Our top value <br /> features for you
          </h1>
        </div>
        <div className="col-span-6 flex flex-col sm:flex-row gap-5 mt-5 lg:mt-0">
          <div className="flex-1 p-10 flex flex-col bg-white shadow-md lg:shadow-none items-center rounded-xl space-y-2">
            <img
              src="/assets/destination.png"
              alt="destination"
              className="rounded-full w-12"
            />
            <h3 className="text-xl font-bold whitespace-nowrap">
              Best Tour Guide
            </h3>
            <p className="text-center">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
          <div className="flex-1 p-10 bg-white shadow-md flex flex-col items-center rounded-xl space-y-2">
            <img
              src="/assets/booking.png"
              alt="booking"
              className="rounded-full w-12"
            />
            <h3 className="text-xl font-bold whitespace-nowrap">
              Easy Booking
            </h3>
            <p className="text-center">
              Square, was moving across the sand in their direction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
