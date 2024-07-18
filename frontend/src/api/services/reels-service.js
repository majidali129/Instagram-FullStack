// src/services/reelService.js
import api from "./api-service";

// Fetch a list of reels (with optional query parameters for filtering/sorting)
const getReels = async () => {
  try {
    const response = await api.get("/reels");
    return response.data;
  } catch (error) {
    console.error("Error fetching reels", error);
    throw error;
  }
};

// Fetch a specific reel by ID
const getReel = async (reelId) => {
  try {
    const response = await api.get(`/reels/${reelId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reel", error);
    throw error;
  }
};

// Like a specific reel by ID
const likeReel = async (reelId) => {
  try {
    const response = await api.post(`/reels/${reelId}/like`);
    return response.data;
  } catch (error) {
    console.error("Error liking reel", error);
    throw error;
  }
};

// Comment on a specific reel by ID
const commentOnReel = async (reelId, comment) => {
  try {
    const response = await api.post(`/reels/${reelId}/comment`, { comment });
    return response.data;
  } catch (error) {
    console.error("Error commenting on reel", error);
    throw error;
  }
};

// Save a specific reel by ID
const saveReel = async (reelId) => {
  try {
    const response = await api.post(`/reels/${reelId}/save`);
    return response.data;
  } catch (error) {
    console.error("Error saving reel", error);
    throw error;
  }
};

// Report a specific reel by ID
const reportReel = async (reelId, reportData) => {
  try {
    const response = await api.post(`/reels/${reelId}/report`, reportData);
    return response.data;
  } catch (error) {
    console.error("Error reporting reel", error);
    throw error;
  }
};

// Upload a new reel
const uploadReel = async (reelData) => {
  try {
    const response = await api.post("/reels", reelData);
    return response.data;
  } catch (error) {
    console.error("Error uploading reel", error);
    throw error;
  }
};

// Fetch comments for a specific reel by ID
const getReelComments = async (reelId) => {
  try {
    const response = await api.get(`/reels/${reelId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reel comments", error);
    throw error;
  }
};

// Follow the creator of a reel by their user ID
const followUser = async (userId) => {
  try {
    const response = await api.post(`/users/${userId}/follow`);
    return response.data;
  } catch (error) {
    console.error("Error following user", error);
    throw error;
  }
};

export {
  getReels,
  getReel,
  likeReel,
  commentOnReel,
  saveReel,
  reportReel,
  uploadReel,
  getReelComments,
  followUser
};
