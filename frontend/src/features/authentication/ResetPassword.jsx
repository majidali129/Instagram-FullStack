import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdLockReset } from "react-icons/md";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { updatePassword } from "../../api/services/user-service";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  // server need reset token and new password

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(
      { newPassword },
      {
        onSettled: () => {
          setNewPassword("");
        }
      }
    );
  };

  return (
    <section className="flex items-center justify-center h-full">
      <Form className="py-14" onSubmit={onSubmit}>
        <h3 className="md:mb-5">
          <MdLockReset className="w-7 h-7" />
          Reset Password
        </h3>
        <div className="py-2 space-y-2">
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            name="newPassword"
            placeholder="New Password"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          varient="primary"
          className="!w-full"
        >
          {isPending ? "Reseting" : "Reset Password"}
        </Button>
      </Form>
    </section>
  );
};

export default ResetPassword;
