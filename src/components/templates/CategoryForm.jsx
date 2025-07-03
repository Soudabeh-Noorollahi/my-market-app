// import React, { useState } from "react";

// function CategoryForm() {
//   const [form, setForm] = useState({ name: "", slug: "", icon: "" });

//   const changeHandler = (event) => {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(form);
//   };

//   return (
//     <form onChange={changeHandler} onSubmit={submitHandler}>
//       {" "}
//       <h3>New Category</h3>
//       <label htmlFor="name">Category Name</label>
//       <input type="text" name="name" id="name" />
//       <label htmlFor="slug">Slug</label>
//       <input type="text" name="slug" id="slug" />
//       <label htmlFor="icon">Icon</label>
//       <input type="text" name="icon" id="icon" />
//       <button type="submit">Create</button>
//     </form>
//   );
// }

// export default CategoryForm;

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

<button
  type="submit"
  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
>
  <FaPlus className="w-4 h-4" />
  Add Category
</button>


function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
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
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <FaPlus className="w-4 h-4" />
        Add Category
      </button>
    </form>
  );
}

export default CategoryForm;
