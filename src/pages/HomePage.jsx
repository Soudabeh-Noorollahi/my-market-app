import { useQuery } from "@tanstack/react-query";

import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import { getAllPosts } from "@/services/user";
import Loader from "@/components/modules/Loader";
import { getCategory } from "@/services/admin";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-[1400px] mx-auto flex px-4 md:px-6 lg:px-8 gap-6">
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
