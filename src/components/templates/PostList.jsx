// import { useQuery } from "@tanstack/react-query";

// import { getPosts, deletePost } from "@/services/user";
// import Loader from "../modules/Loader";
// import { FaRegCalendarAlt } from "react-icons/fa";

// function PostList() {
//   const baseURL = import.meta.env.VITE_BASE_URL;

//   const { data, isLoading, isError } = useQuery(["my-post-list"], getPosts);
//   console.log(data);

//   if (isLoading) return <Loader />;
//   if (isError)
//     return <p className="text-center text-red-500">Error loading posts.</p>;
//   if (!data?.data?.posts?.length)
//     return <p className="text-center text-gray-500">No posts found.</p>;

//   return (
//     <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
//       <h3 className="text-xl font-semibold border-b border-red-700 shadow-sm pb-2 mb-4">
//         {" "}
//         Your Published Ads
//       </h3>

//       {data?.data?.posts.map((post) => (
//         <div
//           key={post._id}
//           className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-2 gap-4 bg-white"
//         >
//           {/* Image */}
//           <div className="w-full md:w-40 flex-shrink-0 overflow-hidden rounded-lg border bg-white p-1">
//             <img
//               src={`${baseURL}${(post.images?.[0] || "").replace(/\\/g, "/")}`}
//               alt={post.options?.title || "No title"}
//               className="w-full  h-24 md:h-32 object-contain"
//             />
//           </div>

//           {/* Middle: Title & Content */}
//           <div className="flex-1 text-center md:text-left space-y-2">
//             <h4 className="text-lg font-semibold text-gray-800">
//               {post.options?.title || "No title"}
//             </h4>
//             <p className="text-sm text-gray-600 line-clamp-2">
//               {post.options?.content || "No description available."}
//             </p>
//           </div>

//           {/* Right: Date & Price */}
//           <div className="flex flex-col items-center md:items-end text-sm text-gray-700 space-y-2 md:pr-4">
//             <p className="flex items-center gap-2">
//               <FaRegCalendarAlt className="w-4 h-4 " />{" "}
//               {new Date(post.createdAt).toLocaleDateString("de-DE", {
//                 day: "2-digit",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </p>
//             <span className="font-bold">
//               {post.amount.toLocaleString("de-DE", {
//                 style: "currency",
//                 currency: "EUR",
//               })}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostList;

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, deletePost } from "@/services/user";
import Loader from "../modules/Loader";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const queryClient = useQueryClient();

  // Fetch all posts
  const { data, isLoading, isError } = useQuery(["my-post-list"], getPosts);

  // Handle deletion
  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post deleted successfully");
      queryClient.invalidateQueries(["my-post-list"]);
    },
    onError: () => {
      toast.error("Failed to delete post");
    },
  });

  const handleDelete = (id) => {
    mutate(id);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return <p className="text-center text-red-500">Error loading posts.</p>;
  if (!data?.data?.posts?.length)
    return <p className="text-center text-gray-500">No posts found.</p>;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
      <h3 className="text-xl font-semibold border-b border-red-700 shadow-sm pb-2 mb-4">
        Your Published Ads
      </h3>

      {data?.data?.posts.map((post) => (
        <div
          key={post._id}
          className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-2 gap-4 bg-white"
        >
          {/* Image */}
          <div className="w-full md:w-40 flex-shrink-0 overflow-hidden rounded-lg border bg-white p-1">
            <img
              src={`${baseURL}${(post.images?.[0] || "").replace(/\\/g, "/")}`}
              alt={post.options?.title || "No title"}
              className="w-full h-24 md:h-32 object-contain"
            />
          </div>

          {/* Middle: Title & Content */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              {post.options?.title || "No title"}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {post.options?.content || "No description available."}
            </p>
          </div>

          {/* Right: Date, Price and Delete */}
          <div className="flex flex-col items-center md:items-end text-sm text-gray-700 space-y-2 md:pr-4">
            <p className="flex items-center gap-2">
              <FaRegCalendarAlt className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <span className="font-bold">
              {post.amount.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </span>

            <button
              onClick={() => handleDelete(post._id)}
              title="Delete post"
              className="text-neutral-500 hover:text-red-600 transition-colors"
            >
              <MdDelete className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
