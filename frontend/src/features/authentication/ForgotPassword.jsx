import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TbProgressHelp } from "react-icons/tb";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ForgotPasswrod } from "../../api/services/user-service";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // server need only mail address

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: ForgotPasswrod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(
      { email },
      {
        onSettled: () => {
          setEmail("");
        }
      }
    );
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <Form className="py-8" onSubmit={onSubmit}>
        <h3 className="md:mb-5">
          <TbProgressHelp className="w-[26px] h-[26px]" />
          Forgot Password
        </h3>
        <div className="py-2 space-y-2">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          varient="primary"
          className="!w-full"
        >
          {isPending ? "Wait..." : "Forgot Password"}
        </Button>
      </Form>
    </section>
  );
};

export default ForgotPassword;
