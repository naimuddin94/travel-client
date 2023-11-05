import AdminTalk from "../components/home/AdminTalk";
import Banner from "../components/home/Banner";
import Features from "../components/home/features/Features";
import Helping from "../components/home/Helping";
import Partners from "../components/home/Partners";
import PopularServices from "../components/home/PopularServices/PopularServices";
import Why from "../components/home/Why";

const Home = () => {
  
  return (
    <div className="">
      <Banner />
      <Partners />
      <Why />
      <PopularServices/>
      <Helping />
      <Features />
      <AdminTalk />
    </div>
  );
};

export default Home;
