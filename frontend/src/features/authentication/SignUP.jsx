import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SiGnuprivacyguard } from "react-icons/si";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { registerUser } from "../../api/services/user-service";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("User registered successfully");
      navigate("/accounts/login");
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username,
      fullName,
      email,
      password,
      avatar
    };
    mutate(payload, {
      onSettled: () => {
        setEmail("");
        setFullName("");
        setUsername("");
        setPassword("");
        setAvatar(null);
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Form className="!py-9 h-[94%] md:h-[90%]  " onSubmit={onSubmit}>
        <>
          <h3 className="flex items-center justify-center mb-4 text-2xl italic font-semibold gap-x-2.5 md:mb-5">
            <SiGnuprivacyguard className="w-6 h-6" /> Create Account
          </h3>
          <p className="font-semibold text-zinc-400">
            Sign up to see photos and videos from your friends.
          </p>
          <div className="py-2 space-y-2">
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
              name="fullName"
              placeholder="Full Name"
            />
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <div className="flex w-full overflow-hidden gap-x-10">
              <>
                <label
                  htmlFor="file-upload"
                  className="inline-block w-full px-2 py-2 text-center rounded-md cursor-pointer bg-zinc-800"
                >
                  <i className="fa fa-cloud-upload"></i>{" "}
                  {avatar ? avatar?.name : "Upload File"}
                </label>
                <input
                  id="file-upload"
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                />
              </>
            </div>
          </div>
          <p className="py-1.5 opacity-60 text-[.9rem]">
            People who use our service may have uploaded your contact
            information to Instagram
          </p>
          <p className="py-1.5 opacity-60 text-[.9rem">
            By signing up, you agree to our{" "}
            <span className="border-b opacity-100 border-b-zinc-400">
              Terms
            </span>{" "}
            ,{" "}
            <span className="border-b opacity-100 border-b-zinc-400">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="border-b opacity-100 border-b-zinc-400">
              Cookies Policy
            </span>{" "}
            .
          </p>

          <Button
            disabled={isPending}
            varient="primary"
            type="submit"
            className="!w-full"
          >
            {isPending ? "wait..." : "Sign Up"}
          </Button>
          <p className="space-x-1">
            <span>Already have an account?</span>
            <Link to="/accounts/login" className="text-blue-400">
              Login
            </Link>
          </p>
        </>
      </Form>
    </div>
  );
};

export default SignUp;
