import api from "@/configs/api.js";

const getProfile = () => api.get("user/whoami"); //error profile

export { getProfile };
