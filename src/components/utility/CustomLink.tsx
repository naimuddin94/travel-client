import { NavLink } from "react-router-dom";

interface ICustomLiProps {
  goto: string;
  text: string;
}

const CustomLink = ({ goto, text }: ICustomLiProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-[#5D50C6] py-2 px-4 rounded-full text-slate-50"
          : "py-2 px-4 rounded-full hover:bg-[#bab7d2]"
      }
      to={goto}
    >
      {text}
    </NavLink>
  );
};

export default CustomLink;
