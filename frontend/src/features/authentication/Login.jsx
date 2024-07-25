import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import CustomLink from "../../ui/Link";
import { useLogin } from "./useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loggingIn } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        }
      }
    );
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <Form className="!py-8" onSubmit={onSubmit}>
        <>
          <h3>
            <IoMdLogIn className="w-[26px] h-[26px]" />
            Sign In
          </h3>
          <div className="py-2 space-y-2">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              disabled={email === ""}
              placeholder="Password"
            />
          </div>
          <Button
            disabled={loggingIn}
            type="submit"
            varient="primary"
            className="!w-full "
          >
            Login
          </Button>
          <p className="py-1.5 opacity-60 text-[.9rem">OR</p>
          <Button varient="primary" className="!w-full py-2.5">
            <>
              <span>
                <FaFacebookSquare className="w-6 h-6" />
              </span>
              <span className="-mt-1">Log in with Facebook</span>
            </>
          </Button>
          <CustomLink type="primary">
            <Link to="/accounts/forgot-password">Forgot Password</Link>
          </CustomLink>

          <p className="space-x-1">
            <span>Don&apost have an account?</span>
            <Link to="/accounts/emailsignup" className="text-blue-400">
              Sign Up
            </Link>
          </p>
        </>
      </Form>
    </section>
  );
};

export default Login;
