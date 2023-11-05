const AdminTalk = () => {
    return (
      <div className="relative">
        <div className="absolute opacity-10 -z-50 md:-top-[80%] lg:-top-[115%]">
          <img src="/assets/Vector.png" alt="" />
        </div>
        <div className="flex justify-center items-center my-10 md:my-24">
          <div className="flex flex-col items-center">
            <img src="/assets/Ellipse22.png" alt="" className="w-28 h-28 rounded-full" />
            <h3 className="text-[#FF5722] font-bold">
              Mark Smith / <span className="text-slate-400 font-mono">Advisor</span>
            </h3>
            <p className="max-w-md p-5 text-center text-sm">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AdminTalk;
