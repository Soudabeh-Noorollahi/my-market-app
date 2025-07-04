import { addCategory } from "@/services/admin";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

<button
  type="submit"
  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
>
  <FaPlus className="w-4 h-4" />
  Add Category
</button>;

function CategoryForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
  console.log({ isLoading, error, data });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className="w-full max-w-md bg-white border border-gray-200 rounded shadow-sm p-6 space-y-4 mx-auto"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-1 inline-block">
        Add New Category
        <span className="block h-1 bg-[#a62626] mt-1 rounded"></span>
      </h3>
      {!!error && <p>{error.message} </p>}
      {data?.status === 201 && (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded px-4 py-2 text-sm">
          ✅ Category added successfully!
        </p>
      )}

      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm text-gray-700">
          Category Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="slug" className="text-sm text-gray-700">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="icon" className="text-sm text-gray-700">
          Category Icon
        </label>
        <input
          type="text"
          name="icon"
          id="icon"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200
    ${
      isLoading
        ? "bg-primary opacity-50 cursor-not-allowed"
        : "bg-primary hover:bg-primaryDark"
    }
  `}
      >
        <FaPlus className="w-4 h-4" />
        Add Category
      </button>
    </form>
  );
}

export default CategoryForm;
