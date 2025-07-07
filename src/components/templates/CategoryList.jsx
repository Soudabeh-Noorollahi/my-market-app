import { getCategory, deleteCategory } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import { MdDelete } from "react-icons/md";

function CategoryList() {
  const { refetch, data, isLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  const deleteHandler = async (id) => {
    try {
      await deleteCategory(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 mt-8">
      <h3 className="text-lg font-semibold mb-4 inline-block">
        Categories:
        <span className="block h-1 bg-[#a62626] mt-1 rounded"></span>
      </h3>
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Loader />
        </div>
      ) : (
        data.data.map((i) => (
          <div
            key={i._id}
            className="flex items-center justify-between  p-4 mb-4 border border-gray-200 rounded shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img src={`${i.icon}.svg`} alt={i.name} className="w-8 h-8" />
              <div>
                <h5 className="font-medium text-gray-800">{i.name}</h5>
                <p className="text-xs text-red-700 font-semibold mt-1">
                  Slug: {i.slug}
                </p>
              </div>
            </div>
            <button onClick={() => deleteHandler(i._id)}>
              <MdDelete className="w-5 h-5 text-neutral-500 hover:text-rose-600 transition-colors" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
