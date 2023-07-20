import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [addNewTask, setAddNewTask] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("all"); // Add this state

  const onTaskFormSubmit = (newTaskData) => {
    setAddNewTask([...addNewTask, newTaskData]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currentCategory={currentCategory} // Pass the currentCategory prop
        setCurrentCategory={setCurrentCategory} // Pass the setCurrentCategory prop
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList taskData={addNewTask} currentCategory={currentCategory} /> {/* Pass the currentCategory prop */}
    </div>
  );
}

export default App;
