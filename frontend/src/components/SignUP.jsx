import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { registerUser } from "../api/services/user-service";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      username, fullName, email, password, avatar
    }

    try {
      setLoading(true)
      setError('')
      const response = await registerUser(payload)
      console.log(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error?.message)
      setLoading(false)
    }

    // setEmail('')
    // setFullName('')
    // setUsername('')
    // setPassword('')
    // setAvatar(null)

  }



  return (
    <Form className="md:px-8 px-4 py-4 text-center h-full " onSubmit={onSubmit}>
      <>
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
        <div className="flex gap-x-10 w-full overflow-hidden">
              <>
                <label
                  htmlFor="file-upload"
                  className="inline-block bg-zinc-800 w-full py-2 px-2 rounded-md cursor-pointer text-center"
                >
                  <i className="fa fa-cloud-upload"></i> {avatar? avatar?.name : 'Upload File'}
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

      <Button disabled={loading} varient="primary" type="submit" className="!w-full">
        {loading? 'wait...': 'Sign Up'}
      </Button>
      <p className="space-x-1">
        <span>Already have an account?</span>
        <Link to="/accounts/login" className="text-blue-400">
          Login
        </Link>
      </p>
      </>
    </Form>
  );
};

export default SignUp;
