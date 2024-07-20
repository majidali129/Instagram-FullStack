import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/services/user-service";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: loggingIn } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: ({ data }) => {
      toast.success("User logged in successfully");
      navigate("/");
      queryClient.setQueryData(["user"], data?.user);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log(data);
    }
  });

  return { login, loggingIn };
};
