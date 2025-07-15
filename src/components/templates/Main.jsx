// function Main({ posts }) {
//   const baseURL = import.meta.env.VITE_BASE_URL;

//   return (
//     <div>
//       {posts?.data?.posts?.map((post) => (
//         <div key={post._id}>
//           <div>
//             <p>{post.options?.title || "No title"}</p>
//             <div>
//               <span className="font-bold">
//                 {post.amount.toLocaleString("de-DE", {
//                   style: "currency",
//                   currency: "EUR",
//                 })}
//               </span>
//               <span>{post.options?.city || "Unknown city"}</span>
//             </div>
//           </div>
//           <img src={`${baseURL}${post.images[0]}`}/>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Main;

function Main({ posts }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.data?.posts?.map((post) => (
          <div
            key={post._id}
            className="flex items-center gap-3 border rounded-lg shadow-sm hover:shadow-md transition bg-white p-2"
          >
            {/* عکس آگهی */}
            <div className="w-24 h-24 flex-shrink-0 border rounded-md overflow-hidden bg-gray-50">
              <img
                src={`${baseURL}${post.images[0]}`}
                alt={post.options?.title || "No title"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* اطلاعات آگهی */}
            <div className="flex-1 space-y-1 text-sm">
              <h4 className="font-semibold text-gray-800 line-clamp-1">
                {post.options?.title || "No title"}
              </h4>
              <p className="text-gray-600 line-clamp-2 text-xs">
                {post.options?.content || "No description"}
              </p>
              <div className="flex items-center justify-between text-gray-700 font-medium">
                <span>
                  {post.amount.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
                <span className="text-xs text-gray-500">
                  {post.options?.city || "Unknown city"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
