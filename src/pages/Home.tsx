import Banner from "../components/home/Banner";
import Features from "../components/home/features/Features";
import Helping from "../components/home/Helping";
import Partners from "../components/home/Partners";
import Why from "../components/home/Why";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Partners />
      <Why />
      <Helping />
      <Features />
    </div>
  );
};

export default Home;
