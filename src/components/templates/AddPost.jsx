import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/services/admin";

function AddPost() {
  const { data } = useQuery(["get-categories"], getCategory);
  console.log(data);

  const addHandler = (event) => {
    event.preventDefault();
    console.log("sent");
  };

  return (
    <form>
      <h3> Add an ad</h3>
      <label htmlFor="titel"> titel</label>
      <input type="text" name="titel" id="titel" />
      <label htmlFor="content"> Content</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount"> Price</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city"> City</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category"> Category</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images"> Image</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}> Create</button>
    </form>
  );
}

export default AddPost;
