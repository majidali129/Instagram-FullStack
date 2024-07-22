import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/services/post-service";

export const useFetchPosts = (query) => {
  const { isLoading: loadingPosts, data } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => getAllPosts(query)
  });
  return { loadingPosts, posts: data?.posts };
};
