const Footer = () => {
  return (
    <footer className="bg-[#071A52] text-[#A7FF83]">
      <div className="footer p-10 justify-center sm:justify-around">
        <aside>
          <img src="/assets/logo.png" alt="" className="w-16" />
          <p>
            BigMarket
            <br />
            Providing reliable valuable service since 2001
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer footer-center p-4 opacity-70">
        <aside>
          <p>Copyright © 2023 - All right reserved by BigMarket</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
