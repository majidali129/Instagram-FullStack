import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { updatePassword } from "../../api/services/user-service";
import {useMutation, useQueryClient} from '@tanstack/react-query'

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationKey: ['user'],
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']})
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({oldPassword, newPassword})
    mutate({oldPassword, newPassword}, {
      onSettled: () => {
        setNewPassword('')
        setOldPassword('')
      }
    })
  }

  return (
    <section className="h-full flex items-center justify-center">
      <Form className="md:px-8 px-4 py-12 text-center" onSubmit={onSubmit}>
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
        <Button disabled={isPending} type="submit" varient="primary" className="!w-full">
          {isPending? 'Updating': 'Update Password'}
        </Button>
      </Form>
    </section>
  );
};

export default UpdatePassword;
