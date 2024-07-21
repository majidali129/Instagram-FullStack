import api from "./api-service";

const addComment = async (payload) => {
  try {
    const { data } = await api.post("/comments", payload);
    return data?.data;
  } catch (error) {
    console.log("Comment creation ERROR::", error);
    throw error;
  }
};

const deleteComment = async (commentId) => {
  try {
    const { data } = await api.delete(`/comments/${commentId}`);
    return data?.data;
  } catch (error) {
    console.log("Error while deleting comment::", error);
    throw error;
  }
};

const getAllComments = async (query) => {
  let url = "/comments";
  if (query) url = `/comments?postId=${query}`;
  console.log(url, query);
  try {
    const { data } = await api.get(url);
    return data?.data;
  } catch (error) {
    console.log("Error while fetching comments::", error);
    throw error;
  }
};

const getComment = async (commentId) => {
  try {
    const { data } = await api.get(`/comments/${commentId}`);
    return data?.data;
  } catch (error) {
    console.log("Comment deletion ERROR::", error);
    throw error;
  }
};

export { addComment, deleteComment, getAllComments, getComment };
