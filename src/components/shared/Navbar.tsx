import { Link } from "react-router-dom";
import NavItems from "../utility/NavItems";
import Button from "../utility/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-[#071A52] h-12 text-[#A7FF83]">
      <div className="navbar-start">
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
            <h2 className="font-bold">BigMarket</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end">
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
