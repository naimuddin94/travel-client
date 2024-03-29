import useAuthInfo from "../../hooks/useAuthInfo";
import CustomLink from "./CustomLink";

const NavItems = () => {
  const { user, logOut } = useAuthInfo();
  return (
    <>
      <CustomLink goto="/" text="Home" />
      <CustomLink goto="/services" text="Services" />

      {user ? (
        <>
          <li tabIndex={0} className="hover:bg-[#bab7d2] rounded-full">
            <details>
              <summary className="py-2">Dashboard</summary>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[#071A52] gap-1">
                <CustomLink goto="/my-services" text="My Services" />
                <CustomLink goto="/add-service" text="Add Service" />
                <CustomLink goto="/my-schedules" text="My Schedules" />
                <CustomLink goto="/cart" text="My Cart" />
              </ul>
            </details>
          </li>
          <button className="custom-btn w-fit py-2" onClick={() => logOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <CustomLink goto="/signup" text="Sign Up" />
          <CustomLink goto="/signin" text="Sign In" />
        </>
      )}
    </>
  );
};

export default NavItems;
