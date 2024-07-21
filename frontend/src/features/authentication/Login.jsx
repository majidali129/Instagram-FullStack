import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { FaFacebookSquare } from "react-icons/fa";
import CustomLink from "../../ui/Link";
import { loginUser } from "../../api/services/user-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLogin } from "./useLogin";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, loggingIn} = useLogin()



  const onSubmit = (e) => {
    e.preventDefault()
    console.log({email, password})
    login({email, password}, {
      onSettled: () => {
        setEmail('')
        setPassword('')
      }
    })
  }


  return (
    <section className="flex items-center justify-center h-full">
      <Form className="px-4 py-12 text-center md:px-8" onSubmit={onSubmit}>
        <>
        <h3 className="mb-4 text-2xl italic font-semibold md:mb-8">
          Snapgram
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
            disabled={email===''}
            placeholder="Password"
          />
        </div>
        <Button disabled={loggingIn} type="submit" varient="primary" className="!w-full ">
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
        <CustomLink>
          <Link to="/accounts/password/reset/">Forgot Password</Link>
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