import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/services/admin";

function Sidebar() {
  const { data } = useQuery(["get-categories"], getCategory);
  console.log(data);

  return (
    <div>
      <h4>Categories</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
