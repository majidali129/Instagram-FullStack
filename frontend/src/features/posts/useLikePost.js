import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeUnlikePost as likePost } from "../../api/services/post-service";

export const useLikePost = () => {
  const queryClient = useQueryClient();
  const { mutate: likeUnlikePost, isPending: likingPost } = useMutation({
    mutationFn: (postId) => likePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });

  return { likeUnlikePost, likingPost };
};
