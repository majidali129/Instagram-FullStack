import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api/services/user-service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const { mutate: logout, isPending: loggingOut } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      toast.success("User logged out successfully");
      navigate("/accounts/login", { replace: true });
    },
    onError: (error) => toast.error(error)
  });

  return { logout, loggingOut };
};

export default useLogout;
