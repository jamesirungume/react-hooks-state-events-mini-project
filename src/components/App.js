import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [addNewTask, setAddNewTask] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("All"); // Use "All" instead of "all" to match the category value

  const onTaskFormSubmit = (newTaskData) => {
    setAddNewTask([...addNewTask, newTaskData]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList taskData={addNewTask} currentCategory={currentCategory} />
    </div>
  );
}

export default App;
