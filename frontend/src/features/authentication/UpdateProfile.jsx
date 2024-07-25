import { useState } from "react";
import { TbExchange } from "react-icons/tb";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <section className="flex items-center justify-center h-full">
      <Form className="py-9">
        <h3>
          <TbExchange />
          Update Profile
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
