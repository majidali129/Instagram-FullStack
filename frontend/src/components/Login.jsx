import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { FaFacebookSquare } from "react-icons/fa";
import CustomLink from "../shared/Link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="h-full flex items-center justify-center">
      <Form className="md:px-8 px-4 py-12 text-center">
        <h3 className="italic  font-semibold text-2xl mb-4 md:mb-8">
          Snapgram
        </h3>
        <div className="space-y-2 py-2">
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
            placeholder="Password"
          />
        </div>
        <Button type="submit" varient="primary" className="!w-full">
          Sign Up
        </Button>
        <p className="py-1.5 opacity-60 text-[.9rem">OR</p>
        <Button varient="primary" className="!w-full py-2.5">
          <span>
            <FaFacebookSquare className="w-6 h-6" />
          </span>
          <span className="-mt-1">Log in with Facebook</span>
        </Button>
        <CustomLink>
          <Link to="/accounts/password/reset/">Forgot Password</Link>
        </CustomLink>

        <p className="space-x-1">
          <span>Don&apost have an account?</span>
          <Link to="/accounts/emailsignup" className="text-blue-400">
            Sign Up
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
