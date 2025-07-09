import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getCategory } from "@/services/admin";
import { getCookie } from "@/utils/cookie";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: "",
    images: null,
  });

  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (event) => {
    const name = event.target.name;

    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();

    //create formData in dataBase for add image file
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Post created successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("❌ Something went wrong!");
      });
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={addHandler}
      className="w-full max-w-lg mx-auto mt-8 md:mt-12 mb-12 bg-white border border-gray-200 rounded shadow-sm p-6 space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2 inline-block">
        {" "}
        Post a New Ad
        <span className="block h-1 bg-[#a62626] mt-1 rounded"></span>
      </h3>

      <div className="flex flex-col space-y-1">
        <label htmlFor="titel" className="text-sm text-gray-700">
          {" "}
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        {" "}
        <label htmlFor="content" className="text-sm text-gray-700">
          {" "}
          Content
        </label>
        <textarea
          name="content"
          id="content"
          rows={4}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="amount" className="text-sm text-gray-700">
          {" "}
          Price
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="city" className="text-sm text-gray-700">
          {" "}
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="category" className="text-sm text-gray-700">
          {" "}
          Category
        </label>
        <select
          name="category"
          id="category"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        >
          {data?.data.map((i) => (
            <option key={i._id} value={i._id}>
              {i.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="images" className="text-sm text-gray-700">
          {" "}
          Image
        </label>
        <input
          type="file"
          name="images"
          id="images"
          className="border border-gray-300 rounded px-3 py-2 text-sm
        focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primaryDark text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
      >
        {" "}
        Post Ad
      </button>
    </form>
  );
}

export default AddPost;
