import { HiMapPin, HiMiniTicket } from "react-icons/hi2";
import { BsFillCalendarDayFill } from "react-icons/bs";

const FeaturesHero = () => {
  return (
    <div className="flex-1">
      <h3 className="theme-text font-semibold uppercase">Key features</h3>
      <h2 className="text-xl md:text-4xl font-black">We offer best services</h2>
      <p className="py-5 text-slate-600 text-sm">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        <br />
        It has roots in a piece of classical Latin literature from 45 BC.
      </p>
      <div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 rounded-lg">
          <div className=" bg-[#FF5722] rounded-xl p-3">
            <HiMapPin className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">We offer best services</h4>
            <p className="text-sm">Lorem Ipsum is not simply random text</p>
          </div>
        </div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 pr-8 shadow-sm rounded-lg">
          <div className=" bg-[#FACD49] rounded-xl p-3">
            <BsFillCalendarDayFill className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Schedule your trip</h4>
            <p className="text-sm">It has roots in a piece of classical</p>
          </div>
        </div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 rounded-lg">
          <div className=" bg-[#F85E9F] rounded-xl p-3">
            <HiMiniTicket className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Get discounted coupons</h4>
            <p className="text-sm">Lorem Ipsum is not simply random text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
