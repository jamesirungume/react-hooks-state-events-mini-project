import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleCategory(event) {
    setOption(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({
      text: input,
      category: option,
    });
    setOption("");
    setInput("");
  };

  const categoryOptions = categories.map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={input} onChange={handleInput} />
      </label>
      <label>
        Category
        <select name="category" value={option} onChange={handleCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
