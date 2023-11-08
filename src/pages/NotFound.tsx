import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <img src="/assets/404.gif" alt="" className="-mb-16 md:-mb-40" />
      <button onClick={() => navigate("/")} className="custom-btn-two">
        <AiOutlineArrowLeft className="text-lg" />
        Go back
      </button>
      <h1 className="text-2xl font-semibold text-slate-600">
        Oops page not found!
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default NotFound;
