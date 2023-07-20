import React from "react";
import Task from "./Task";

function TaskList({ taskData, currentCategory }) {
  // Filter tasks based on the selected category or show all tasks if "All" is selected
  const filteredTasks = currentCategory === "All" ? taskData : taskData.filter(task => task.category === currentCategory);

  // Map through the filtered tasks and create a Task component for each task
  const tasks = filteredTasks.map((task, index) => (
    <Task key={index} text={task.text} category={task.category} />
  ));

  return <div className="tasks">{tasks}</div>;
}

export default TaskList;
