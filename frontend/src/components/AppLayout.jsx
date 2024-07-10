import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <main className=" bg-zinc-950 w-full flex flex-col sm:flex-row h-[100vh]  ">
      <Header />
      <Navbar />

      <section className="w-full h-full overflow-y-scroll ">
        <Outlet />
      </section>
    </main>
  );
};

export default AppLayout;
