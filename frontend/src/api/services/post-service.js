import api from "./api-service";

const createPost = async (payload) => {
  try {
    const response = await api.post(`/posts`, payload);
    return response;
  } catch (error) {
    console.error("Error while creating post", error);
    throw error;
  }
};

const getPost = async (param) => {
  try {
    const response = await api.get(`/posts/${param}`);
    return response;
  } catch (error) {
    console.error("Error while fetching post", error);
    throw error;
  }
};

const getAllPosts = async () => {
  try {
    const { data } = await api.get("/posts");
    return data.data;
  } catch (error) {
    console.error("Error while fetching posts", error);
    throw error;
  }
};

const updatePost = async (param, payload) => {
  try {
    const response = await api.patch(`/posts/${param}`, payload);
    return response;
  } catch (error) {
    console.error("Error while updating post", error);
    throw error;
  }
};

const deletePost = async (param) => {
  try {
    const response = await api.delete(`/posts/${param}`);
    return response;
  } catch (error) {
    console.error("Error while deleting post", error);
    throw error;
  }
};

const likeUnlikePost = async (payload) => {
  try {
    const response = await api.get(`/posts/toggleLike`, payload); // payload is postId, in body
    return response;
  } catch (error) {
    console.error("Error to like unlike post", error);
    throw error;
  }
};

const getUserRelatedPosts = async () => {
  try {
    const response = await api.get(`/posts/user-data`);
    return response;
  } catch (error) {
    console.error("Error while getting user related posts", error);
    throw error;
  }
};

export {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
  likeUnlikePost,
  getUserRelatedPosts
};
