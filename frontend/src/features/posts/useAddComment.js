import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addComment } from "../../api/services/comments-service";

const useAddComment = () => {
  const queryClient = useQueryClient();
  const { mutate: addNewComment, isPending: addingComment } = useMutation({
    mutationKey: ["posts"],
    mutationFn: (newComment) => addComment(newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }),
        queryClient.invalidateQueries({ queryKey: ["post"] }),
        toast.success("Comment added successfully");
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  return { addNewComment, addingComment };
};

export default useAddComment;
