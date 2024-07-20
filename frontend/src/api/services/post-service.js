import api from "./api-service";

const createPost = async (payload) => {
  try {
    const { data } = await api.post(`/posts`, payload, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return data;
  } catch (error) {
    console.error("Error while creating post", error);
    throw error;
  }
};

const getPost = async (param) => {
  try {
    const { data } = await api.get(`/posts/${param}`);
    return data;
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
    const { data } = await api.patch(`/posts/${param}`, payload);
    return data;
  } catch (error) {
    console.error("Error while updating post", error);
    throw error;
  }
};

const deletePost = async (param) => {
  try {
    const { data } = await api.delete(`/posts/${param}`);
    return data;
  } catch (error) {
    console.error("Error while deleting post", error);
    throw error;
  }
};

const likeUnlikePost = async (payload) => {
  try {
    const { data } = await api.patch(`/posts/toggleLike`, payload); // payload is postId, in body
    return data;
  } catch (error) {
    console.error("Error to like unlike post", error);
    throw error;
  }
};

const getUserRelatedPosts = async () => {
  try {
    const { data } = await api.get(`/posts/user-data`);
    return data;
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
