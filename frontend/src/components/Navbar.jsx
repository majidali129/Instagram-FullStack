import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="bottom-0 left-0 flex max-sm:absolute max-sm:right-0 max-sm:border-t max-sm:border-t-zinc-600 sm:border-r sm:flex-col sm:h-full sm:space-y-4 sm:px-2 md:space-y-6 sm:py-5 md:py-7 md:px-3 sm:basis-56 max-sm:basis-full sm:border-r-zinc-600 text-start">
      <div className="hidden px-2 sm:block">
        <Logo />
      </div>
      <ul className="flex items-center justify-between w-full sm:items-start sm:flex-col gap-y-4 nav-list">
        {navLinks.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            className=" nav-link py-2 px-2 bg-transparent w-full hover:bg-zinc-900 rounded-md transition-all duration-300 ease-in-out flex 2xl:text-[1.1rem]   items-center max-sm:justify-center sm:gap-x-2.5 "
          >
            <span className="*:w-7 *:h-7">{link.icon}</span>
            <span className="hidden sm:block">{link.text}</span>
          </NavLink>
        ))}
        <NavLink
          // to="/add-post"
          className=" nav-link py-2 px-2 bg-transparent w-full hover:bg-zinc-900 rounded-md transition-all duration-300 ease-in-out flex 2xl:text-[1.1rem]   items-center max-sm:justify-center sm:gap-x-2.5 "
        >
          <span className="*:w-7 *:h-7">
            <RiAddBoxFill />
          </span>
          <span className="hidden sm:block">Create</span>
        </NavLink>
      </ul>
    </aside>
  );
};

const navLinks = [
  {
    text: "HOME",
    path: "/",
    icon: <GoHome />
  },
  {
    text: "Explore",
    path: "/explore",
    icon: <MdOutlineExplore />
  },
  {
    text: "Reels",
    path: "/reels",
    icon: <BiSolidMoviePlay />
  },
  {
    text: "Search",
    path: "/search-something",
    icon: <IoSearchOutline />
  },
  {
    text: "Messages",
    path: "/direct/inbox",
    icon: <RiMessengerLine />
  },
  {
    text: "Profile  ",
    path: "/profile",
    icon: <RxAvatar />
  }
];

export default Sidebar;
