import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="common-padding">
      <div className="footer py-10 justify-center sm:justify-between">
        <aside className="max-w-xs space-y-3">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="" className="w-8" />
            <h2 className="font-bold">Travlog</h2>
          </div>
          <p>Plot 14, Block B, Kolatoli Road, Cox's Bazar, Bangladesh</p>
          <div className="flex gap-3 text-white">
            <div className="p-2 rounded-full bg-[#5D50C6] cursor-pointer hover:brightness-75">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full bg-[#5D50C6] cursor-pointer hover:brightness-75">
              <FaTwitter />
            </div>
            <div className="p-2 rounded-full bg-[#5D50C6] cursor-pointer hover:brightness-75">
              <FaInstagram />
            </div>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Menu</header>

          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/services" className="link link-hover">
            Services
          </Link>
          <Link to="/signup" className="link link-hover">
            Signup
          </Link>
          <Link to="/signin" className="link link-hover">
            Signin
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer footer-center p-4 opacity-80">
        <aside>
          <p>Copyright © 2023 - All right reserved by Travlog</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
