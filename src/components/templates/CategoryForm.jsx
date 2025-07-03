import React, { useState } from "react";

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
    <form onChange={changeHandler} onSubmit={submitHandler}>
      {" "}
      <h3>New Category</h3>
      <label htmlFor="name">Category Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">Slug</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">Icon</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">Create</button>
    </form>
  );
}

export default CategoryForm;
