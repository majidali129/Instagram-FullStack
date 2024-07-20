import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeUnlikePost as likePost } from "../../api/services/post-service";
import toast from "react-hot-toast";

export const useLikePost = () => {
  const queryClient = useQueryClient();
  const { mutate: likeUnlikePost, isPending: likingPost } = useMutation({
    mutationFn: (postId) => likePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Done ");
    }
  });

  return { likeUnlikePost, likingPost };
};
