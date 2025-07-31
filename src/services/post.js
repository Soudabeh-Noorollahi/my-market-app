import api from "@/configs/api";

// GET: fetch single post by ID
const getPostById = (id) => api.get(`post/${id}`);

export { getPostById };
