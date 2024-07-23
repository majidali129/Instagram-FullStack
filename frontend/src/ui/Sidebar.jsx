import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiAddBoxFill } from "react-icons/ri";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { Modal, ModalProvider } from "./Modal";
import CreatePost from "../features/posts/CreatePost";
import { useUser } from "../features/authentication/useUser";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useUser();
  const handleLogout = () => {
    setTimeout(() => {
      navigate("/accounts/login");
    }, 1200);
  };

  const activeStyle = {
    opacity: "100"
  };
  return (
    <ModalProvider>
      <>
        <aside className="hidden px-4 py-10 space-y-10 overflow-y-scroll row-span-full bg-zinc-900 sm:block">
          <Logo />
          {/* Links */}
          <ul className="space-y-2 border-b border-b-zinc-700 py-3  md:*:text-[1.2rem]  link-list">
            {navLinks.map((link) => (
              <li key={link.text}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <span>{link.icon}</span>
                  <span>{link.text}</span>
                </NavLink>
              </li>
            ))}

            <li>
              <Modal.Open opens="create-post">
                <NavLink to="#" className="nav-link">
                  <span>
                    <RiAddBoxFill className="w-6 h-6" />
                  </span>
                  <span>Create</span>
                </NavLink>
              </Modal.Open>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={`/profile/${currentUser?.username}`}
                className="nav-link"
              >
                <CgProfile className="w-6 h-6" />
                <span>Profile</span>
              </NavLink>
            </li>
          </ul>
          <button onClick={handleLogout}>
            <div className="flex items-center py-1.5 mx-1.5  gap-x-2 opacity-50 hover:opacity-100">
              <SlLogout className="w-5 h-5 rotate-180" />
              <span>Log Out</span>
            </div>
          </button>
        </aside>
        <aside className="block row-span-full px-3.5 py-6 sm:py-4 space-y-3 bg-zinc-900 sm:hidden">
          <Logo />
          <ul className="py-3 space-y-2 link-list">
            <li>
              <NavLink
                end
                to="/"
                className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
              >
                <span>
                  <IoMdHome className="w-6 h-6" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
              >
                <span>
                  <MdOutlineExplore className="w-6 h-6" />
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
              <Modal.Open opens="create-post">
                <NavLink
                  to="#"
                  className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
                >
                  <span>
                    <RiAddBoxFill className="w-6 h-6" />
                  </span>
                </NavLink>
              </Modal.Open>
            </li>
            <li>
              <NavLink
                to={`/profile/${currentUser?.username}`}
                className="flex items-center justify-center py-1.5  opacity-50 hover:opacity-100 "
              >
                <CgProfile className="w-6 h-6" />
              </NavLink>
            </li>
          </ul>
        </aside>

        <Modal.Window name="create-post">
          <CreatePost />
        </Modal.Window>
      </>
    </ModalProvider>
  );
};

export default Sidebar;

const navLinks = [
  {
    path: "/",
    text: "Home",
    end: true,
    icon: <IoMdHome className="w-6 h-6" />
  },
  { path: "/explore", text: "Explore", icon: <IoMdHome className="w-6 h-6" /> },
  {
    path: "/bookmarks",
    text: "Saved",
    icon: <BsBookmarkStarFill className="w-6 h-6" />
  },
  {
    path: "/reels",
    text: "Reels",
    icon: <BiSolidMoviePlay className="w-6 h-6" />
  },
  {
    path: "/bookmarks",
    text: "Saved",
    icon: <BsBookmarkStarFill className="w-6 h-6" />
  }
];
