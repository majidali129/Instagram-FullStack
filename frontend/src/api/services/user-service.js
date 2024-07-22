import api from "./api-service";

const registerUser = async (payload) => {
  try {
    const { data } = await api.post(`/users`, payload, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return data;
  } catch (error) {
    console.error("Error while creating user", error);
    throw error;
  }
};
const loginUser = async (payload) => {
  try {
    const { data } = await api.post(`/users/login`, payload);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error while creating user", error);
    throw error;
  }
};

const getAllUsers = async (query) => {
  let url = `/users`;
  if (typeof query === "string" && query.trim().length > 0) {
    url += `/?username=${query}`;
  }
  console.log(url);
  try {
    const { data } = await api.get(url);
    return data?.data;
  } catch (error) {
    console.error("Error while fetching users", error);
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const { data } = await api.get(`/users/current-user`);
    return data?.data;
  } catch (error) {
    console.error("Error while fetching user", error);
    throw error;
  }
};

const getAccoutByUsername = async (username) => {
  try {
    const { data } = await api.get(`/users/profile/${username}`);
    return data?.data;
  } catch (error) {
    console.error("Error while fetching user info", error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const { data } = await api.post(`/users`);
    return data;
  } catch (error) {
    console.error("Error to logout user", error);
    throw error;
  }
};

const removeUser = async (param) => {
  try {
    const { data } = await api.delete(`/users/profile/${param}`);
    return data;
  } catch (error) {
    console.error("Error while deleting user", error);
    throw error;
  }
};

const updatePassword = async (payload) => {
  try {
    const { data } = await api.patch("/users/change-password", payload);
    return data;
  } catch (error) {
    console.error("Error while updating password", error);
    throw error;
  }
};

const updateProfile = async (payload) => {
  try {
    const { data } = await api.patch("/users/update-profile", payload);
    return data;
  } catch (error) {
    console.error("Error while updating profile", error);
    throw error;
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getCurrentUser,
  removeUser,
  updatePassword,
  updateProfile,
  getAccoutByUsername
};
