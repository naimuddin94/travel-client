import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/utility/Loading";

const MainLayout = () => {
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  let title: string;

  url ? (title = url) : (title = "home");

  useEffect(() => {
    document.title = `Travlog | ${title}`;
  }, [title]);

  return (
    <div className="font-inter overflow-hidden relative max-w-[1440px] mx-auto">
      <div className="bg-[#ff562237] h-96 w-96 absolute rounded-full -left-40 -top-40 opacity-5 blur-xl -z-50"></div>
      <div className="bg-gradient-to-br from-[#FF5722] h-[50rem] w-[50rem] absolute rounded-full -left-96 -top-96 blur-3xl opacity-30 -z-50"></div>
      <Navbar />
      <div className="bg-gradient-to-br from-[#FACD49] h-[40rem] w-96 absolute rounded-full -right-40 top-[38rem] blur-3xl opacity-30 -z-50"></div>
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MainLayout;
