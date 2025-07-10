import { useQuery } from "@tanstack/react-query";

import { getPosts } from "@/services/user";
import Loader from "../modules/Loader";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log(data);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            {" "}
            Your Ads
          </h3>

          {data?.data?.posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-sm p-4 gap-4 bg-white"
            >
              {/* Image */}
              <div className="w-full md:w-40 flex-shrink-0">
                <img
                  src={`${baseURL}${(post.images?.[0] || "").replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={post.options?.title || "No title"}
                  className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-sm p-4 gap-4 bg-white"
                />
              </div>

              {/* Middle: Title & Content */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-base font-semibold text-gray-800">
                  {post.options?.title || "No title"}
                </h4>
                <p>{post.options?.content || "No content"}</p>
              </div>

              {/* Right: Date & Price */}
              <div className="flex flex-col items-center md:items-end text-sm text-gray-700">
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                <span className="font-bold">{post.amount}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
