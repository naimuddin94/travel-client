import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavItems from "../utility/NavItems";
import useAuthInfo from "../../hooks/useAuthInfo";

const Navbar = () => {
  const { name, photo } = useAuthInfo();
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(photo);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar h-12 common-padding fixed z-50 ${
        scrolling
          ? "bg-gradient-to-r from-[#f85e9e79] to-[#5e50c67b] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#071A52]"
          >
            <NavItems />
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img src="/assets/logo.png" alt="Logo image" className="w-8" />
            </div>
            <h2 className="font-bold">Travlog</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavItems />
        </ul>
      </div>
      <div className="justify-end">
        <h2 className="hidden sm:inline text-slate-600 font-mono mx-3">
          {name && name}
        </h2>
        {photo && (
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  urlRegex
                    ? photo
                    : "https://i.postimg.cc/m2HKMNv9/istockphoto-1451587807-612x612.jpg"
                }
              />
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default Navbar;
