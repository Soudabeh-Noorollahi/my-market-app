import AddPost from "@/components/templates/AddPost";
import PostList from "@/components/templates/PostList";

// className="max-w-[1400px]  mx-auto px-4"
function DashboardPage() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
