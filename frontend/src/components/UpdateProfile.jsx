import { useState } from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
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
        </div>
        <Button type="submit" varient="primary" className="!w-full">
          Update
        </Button>
      </Form>
    </section>
  );
};

export default UpdateProfile;
