import api from "./api-service";

const registerUser = async (payload) => {
  try {
    const response = await api.post(`/users`, payload, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response;
  } catch (error) {
    console.error("Error while creating user", error);
    throw error;
  }
};
const loginUser = async (payload) => {
  console.log(payload);
  try {
    const response = await api.post(`/users/login`, payload);
    return response;
  } catch (error) {
    console.error("Error while creating user", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get();
    return response;
  } catch (error) {
    console.error("Error while fetching users", error);
    throw error;
  }
};

const getUser = async (param) => {
  try {
    const response = await api.get(`/users/${param}`);
    return response;
  } catch (error) {
    console.error("Error while fetching user", error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const response = await api.post(`/users`);
    return response;
  } catch (error) {
    console.error("Error to logout user", error);
    throw error;
  }
};

const removeUser = async (param) => {
  try {
    const response = await api.delete(`/users/${param}`);
    return response;
  } catch (error) {
    console.error("Error while deleting user", error);
    throw error;
  }
};

const updatePassword = async (payload) => {
  try {
    const response = await api.patch("/users/change-password", payload);
    return response;
  } catch (error) {
    console.error("Error while updating password", error);
    throw error;
  }
};

const updateProfile = async (payload) => {
  try {
    const resonse = await api.patch("/users/update-profile", payload);
    return resonse;
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
  getUser,
  removeUser,
  updatePassword,
  updateProfile
};
