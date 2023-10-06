import {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [allTasks, setAllTasks] = useState(TASKS)

  const onTaskFormSubmit = (formData, e) => {
    e.preventDefault()
    setAllTasks([...allTasks, formData])
  }

  const handleClick = (key) => {
    const updatedTasks = allTasks.filter(task => task.text !== key)
    setAllTasks(updatedTasks)
  }

  const handleClassToggle = (category) => {
    setSelectedCategory(currentSelected => currentSelected === category ? currentSelected : category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
        handleClassToggle={handleClassToggle} 
        selectedCategory={selectedCategory} 
        />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={allTasks} selectedCategory={selectedCategory} handleClick={handleClick} />
    </div>
  );
}

export default App;
