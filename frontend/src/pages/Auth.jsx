import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className="w-screen h-screen py-2">
      <Outlet />
    </section>
  );
};

export default Auth;
