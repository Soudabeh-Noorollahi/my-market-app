function Main({ posts }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div>
      {posts?.data?.posts?.map((post) => (
        <div key={post._id}>
          <div>
            <p>{post.options?.title || "No title"}</p>
            <div>
              <span className="font-bold">
                {post.amount.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
              <span>{post.options?.city || "Unknown city"}</span>
            </div>
          </div>
          <img src={`${baseURL}${post.images[0]}`}/>
        </div>
      ))}
    </div>
  );
}

export default Main;
