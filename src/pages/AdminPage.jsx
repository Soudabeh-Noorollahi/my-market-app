import CategoryForm from "@/components/templates/CategoryForm";
import CategoryList from "@/components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="max-w-[1400px]  px-4 py-8" >
     <CategoryList/>
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
