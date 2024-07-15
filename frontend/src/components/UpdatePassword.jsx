import { useState } from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <section className="h-full flex items-center justify-center">
      <Form className="md:px-8 px-4 py-12 text-center">
        <h3 className="italic  font-semibold text-2xl mb-4 md:mb-8">
          Snapgram
        </h3>
        <div className="space-y-2 py-2">
          <Input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            name="oldPassword"
            placeholder="Old Password"
          />
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            name="newPassword"
            placeholder="New Password"
          />
        </div>
        <Button type="submit" varient="primary" className="!w-full">
          Update Password
        </Button>
      </Form>
    </section>
  );
};

export default UpdatePassword;
