import {useState} from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, handleClick}) {

  const displayTask = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory)
    .map(task => (
      <Task key={task.text} {...task} handleClick={handleClick} />
    ))

  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}

export default TaskList;
