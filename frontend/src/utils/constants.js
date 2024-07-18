import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";

export const navLinks = [
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
    text: "Create",
    path: "/add-post",
    icon: <RiAddBoxFill />
  },
  {
    text: "Profile  ",
    path: "/profile",
    icon: <RxAvatar />
  }
];
