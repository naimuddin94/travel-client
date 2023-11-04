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
          ? "bg-[#17B978] py-2 px-4 rounded-md text-slate-50"
          : "py-2 px-4 rounded-md hover:bg-[#086972] hover:text-[#A7FF83]"
      }
      to={goto}
    >
      {text}
    </NavLink>
  );
};

export default CustomLink;
