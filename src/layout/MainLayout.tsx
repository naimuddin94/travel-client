import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-inter overflow-hidden relative max-w-[1440px] mx-auto">
      <div className="bg-[#ff562237] h-96 w-96 absolute rounded-full -left-40 -top-40 opacity-5 blur-xl -z-50"></div>
      <div className="bg-gradient-to-br from-[#FF5722] h-[50rem] w-[50rem] absolute rounded-full -left-96 -top-96 blur-3xl opacity-30 -z-50"></div>
      <Navbar />
      <div className="bg-gradient-to-br from-[#FACD49] h-[40rem] w-96 absolute rounded-full -right-40 top-[38rem] blur-3xl opacity-30 -z-50"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;