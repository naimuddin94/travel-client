import Lottie from "lottie-react";
import animationData from "../../assets/animation/traveling.json";

const Loading = () => {
  return (
    <div className="w-full h-48">
      <Lottie animationData={animationData} className="h-72" />
    </div>
  );
};

export default Loading;
