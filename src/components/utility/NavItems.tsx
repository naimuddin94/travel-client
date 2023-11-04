import CustomLink from "./CustomLink";

const NavItems = () => {
  return (
    <>
      <CustomLink goto="/" text="Home" />
      <CustomLink goto="/services" text="Services" />
      <li tabIndex={0} className="hover:bg-[#086972] rounded-md ">
        <details>
          <summary className="hover:text-[#A7FF83]">Dashboard</summary>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[#071A52]">
            <CustomLink goto="/my-services" text="My Services" />
            <CustomLink goto="/add-service" text="Add Service" />
            <CustomLink goto="/my-schedules" text="My Schedules" />
          </ul>
        </details>
      </li>
      <CustomLink goto="/signup" text="Sign Up" />
      <CustomLink goto="/signin" text="Sign In" />
    </>
  );
};

export default NavItems;
