import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#face4925] max-w-xl mx-auto py-4 md:py-6 px-10 rounded-lg text-center mb-5 relative my-5">
      {children}
      <img
        src="/assets/Graphic_Elements.png"
        alt=""
        className="absolute -top-3 w-24 -left-3"
      />
    </div>
  );
};

export default Title;
