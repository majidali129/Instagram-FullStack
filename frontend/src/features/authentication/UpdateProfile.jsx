import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <section className="flex items-center justify-center h-full">
      <Form className="px-4 py-8 text-center md:px-8">
        <h3 className="mb-4 text-2xl italic font-semibold md:mb-8">Snapgram</h3>
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
