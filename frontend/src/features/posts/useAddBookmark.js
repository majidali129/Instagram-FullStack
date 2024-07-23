import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePost as addPostToBookmark } from "../../api/services/post-service";
import toast from "react-hot-toast";

const useAddBookmark = () => {
  const queryClient = useQueryClient();
  const { mutate: savePost, isPending: savingPost } = useMutation({
    mutationFn: (postId) => addPostToBookmark(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["post"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  return { savePost, savingPost };
};

export default useAddBookmark;
