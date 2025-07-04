import api from "@/configs/api.js";

const getProfile = () =>
  api.get("user/whoami").then((response) => response || false);//error profile
const getPosts = () => api.get("post/my");
const getAllPosts = () => api.get(""); 

export { getProfile , getPosts, getAllPosts };
