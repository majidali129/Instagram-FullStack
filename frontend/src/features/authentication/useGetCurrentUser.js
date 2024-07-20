import { getCurrentUser } from "../../api/services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser
  });
  return {
    user: data?.data,
    isLoadingUser
  };
};
