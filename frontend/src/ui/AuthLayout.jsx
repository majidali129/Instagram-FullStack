import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";

const AuthLayout = () => {
  return (
    <section className="relative w-screen h-screen py-2">
      <BackButton />
      <Outlet />
    </section>
  );
};

export default AuthLayout;
