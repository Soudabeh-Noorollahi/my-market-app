import { getCategory, deleteCategory } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import { MdDelete } from "react-icons/md";

function CategoryList() {
  const { refetch, data, isLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  console.log({ data, isLoading });

  const deleteHandler = async (id) => {
    await deleteCategory(id);
    refetch();
  };

  return (
    <div>
      <h3>Categories:</h3>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug: {i.slug}</p>

            <button onClick={() => deleteHandler(i._id)}>
              <MdDelete className="text-neutral-500 w-7 h-6 mr-1 cursor-pointer hover:text-rose-600 transition-colors" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
