import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form className="md:px-8 px-4 py-12 text-center h-full ">
      <h3 className="italic  font-semibold text-2xl mb-4 md:mb-8">Snapgram</h3>
      <p className="font-semibold text-zinc-400">
        Sign up to see photos and videos from your friends.
      </p>
      <div className="space-y-2 py-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          name="fullNme"
          placeholder="Full Name"
        />
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <p className="py-1.5 opacity-60 text-[.9rem]">
        People who use our service may have uploaded your contact information to
        Instagram
      </p>
      <p className="py-1.5 opacity-60 text-[.9rem">
        By signing up, you agree to our{" "}
        <span className="opacity-100 border-b border-b-zinc-400">Terms</span> ,{" "}
        <span className="opacity-100 border-b border-b-zinc-400">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="opacity-100 border-b border-b-zinc-400">
          Cookies Policy
        </span>{" "}
        .
      </p>

      <Button varient="primary" className="!w-full">
        Sign Up
      </Button>
      <p className="space-x-1">
        <span>Already have an account?</span>
        <Link to="/accounts/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default SignUp;
