import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addComment } from "../../api/services/comments-service";

const useAddComment = () => {
  const queryClient = useQueryClient();
  const { mutate: addNewComment, isPending: addingComment } = useMutation({
    mutationKey: ["posts"],
    mutationFn: (newComment) => addComment(newComment),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }),
        toast.success("Comment added successfully");
      console.log(data);
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  return { addNewComment, addingComment };
};

export default useAddComment;
