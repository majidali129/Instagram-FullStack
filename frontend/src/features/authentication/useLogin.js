import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/services/user-service";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: loggingIn } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: ({ data }) => {
      navigate("/");
      queryClient.setQueryData(["user"], data?.user);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log(data);
    }
  });

  return { login, loggingIn };
};
