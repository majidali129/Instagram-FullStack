import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Feeds from "./Feeds";
import Saved from "./Saved";
import Explore from "./Explore";
import Reels from "./Reels";

const AppLayout = () => {
  return (
    <section className="grid sm:grid-cols-[230px_1fr] grid-cols-[60px_1fr] w-full h-[100vh]">
      <Sidebar />
      <div className="border-l border-l-zinc-700 bg-zinc-950 grid grid-rows-[60px_1fr] sm:grid-rows-[70px_1fr]">
        <Header />
        <div className="sm:h-[calc(100vh-70px)] h-[calc(100vh-60px)] px-2 sm:px-4 overflow-y-scroll">
          {/* <Feeds />
          <Saved />
          <Explore /> */}
          {/* <Reels /> */}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AppLayout;
