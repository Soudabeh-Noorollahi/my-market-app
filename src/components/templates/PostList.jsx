import { useQuery } from "@tanstack/react-query";

import { getPosts } from "@/services/user";
import Loader from "../modules/Loader";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3> Your Ads</h3>
          {data?.data?.posts.map((post) => (
            <div key={post._id}>
              <img
                src={`${baseURL}${(post.images?.[0] || "").replace(
                  /\\/g,
                  "/"
                )}`}
                alt={post.options?.title || "No title"}
              />

              <div>
                <p>{post.options?.title || "No title"}</p>
                <span>{post.options?.content || "No content"}</span>
              </div>
              <div>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                <span>{post.amount}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
