import { NavLink, Outlet } from "react-router-dom";
import Button from "../shared/Button";
import { Modal, ModalProvider } from "../shared/Modal";

const About = () => {
  return (
    <ModalProvider >
    <section className="  py-3  space-y-10">
      {/* Profile Info */}
      <div className="flex border-b border-b-zinc-700 py-4 flex-col md:flex-row  items-center gap-x-10 xl:gap-x-28 max-md:gap-y-3 space-y-3 justify-center">
        <div className="lg:w-36 lg:h-36 w-28 h-28 border rounded-full">
          <img src="" alt="" />
        </div>
        <div className="space-y-6 md:space-y-4">
          <div className="space-y-1 text-center">
            <div className="flex flex-col md:flex-row max-md:gap-y-2 items-center gap-x-3">
              <h3>username</h3>
              <Modal.Open opens="edit-profile"><Button className="!py-0.5">Edit Profile</Button></Modal.Open>
            </div>
          </div>
          <div className="flex items-center max-sm:flex-col justify-between *:flex *:items-center *:gap-x-2 stats gap-x-6">
            <div>
              <h4>98</h4>
              <span className="text-gray">Posts</span>
            </div>
            <div>
              <h4>130</h4>
              <span className="text-gray">Followers</span>
            </div>
            <div>
              <h4>980</h4>
              <span className="text-gray">Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* user account media */}
      <div className="space-y-4">
        <ul className="flex items-center *:text-xl *:opacity-50 gap-x-10 md:gap-x-20 justify-center pb-2 w-full">
          {tabs.map((tab) => (
            <li key={tab.text}>
              <NavLink
                to={tab.path}
                className={({ isActive }) => (isActive ? "active-tab" : "")}
                end
              >
                {tab.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
    <Modal.Window name="edit-profile">
      <h2>Edit Profile Form</h2>
    </Modal.Window>
    </ModalProvider>
  );
};

export default About;

const tabs = [
  {
    path: "",
    text: "Posts"
  },
  {
    path: "reels",
    text: "Reels"
  },
  {
    path: "saved",
    text: "Saved"
  }
];
