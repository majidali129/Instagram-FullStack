import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ForgotPasswrod } from "../../api/services/user-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
      <Form className="px-4 py-8 text-center md:px-4" onSubmit={onSubmit}>
        <h3 className="mb-4 text-2xl italic font-semibold md:mb-8">Snapgram</h3>
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
