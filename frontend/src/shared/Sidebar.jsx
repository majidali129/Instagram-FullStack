import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiAddBoxFill } from "react-icons/ri";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import UserProfileCard from "./UserProfileCard";
import { Modal, ModalProvider } from "./Modal";
import SignUp from "../components/SignUP";

const Sidebar = () => {
  return (
    <ModalProvider>
      <aside
        border
        className="hidden px-3.5 py-4 space-y-3 row-span-full bg-zinc-900 sm:block"
      >
        <Logo />
        {/* user profile */}
        <UserProfileCard />
        {/* Links */}
        <ul className="space-y-2 border-b border-b-zinc-700 py-3 md:*:text-xl text-lg">
          <li>
            <NavLink
              to="/"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <span>
                <IoMdHome className="w-7 h-7" />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <span>
                <MdOutlineExplore className="w-7 h-7" />
              </span>
              <span>Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmarks"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <span>
                <BsBookmarkStarFill className="w-7 h-7" />
              </span>
              <span>Saved</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reels"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <span>
                <BiSolidMoviePlay className="w-7 h-7" />
              </span>
              <span>Reels</span>
            </NavLink>
          </li>
          <li>
          <Modal.Open opens="create-post">
            <NavLink
              to="#"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <span>
                <RiAddBoxFill className="w-7 h-7" />
              </span>
              <span>Create</span>
            </NavLink>
          </Modal.Open>
          </li>
          <li>
            <NavLink
              to="/profile/majidali129"
              className="flex items-center py-1.5  gap-x-2 opacity-50 hover:opacity-100 "
            >
              <div className="w-7 h-7 border rounded-full">
                <img src="lskd" alt="." />
              </div>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </aside>
      <aside className="block row-span-full px-3.5 py-6 sm:py-4 space-y-3 bg-zinc-900 sm:hidden">
        <Logo />
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <span>
                <IoMdHome className="w-7 h-7" />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <span>
                <MdOutlineExplore className="w-7 h-7" />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmarks"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <span>
                <BsBookmarkStarFill className="w-6 h-6" />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reels"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <span>
                <BiSolidMoviePlay className="w-6 h-6" />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-post"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <span>
                <RiAddBoxFill className="w-6 h-6" />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/majidali129"
              className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
            >
              <div className="w-7 h-7 border rounded-full">
                <img src="lskd" alt="." />
              </div>
            </NavLink>
          </li>
        </ul>
      </aside>

      <Modal.Window name="create-post">
        <SignUp />
      </Modal.Window>
    </ModalProvider>
  );
};

export default Sidebar;
