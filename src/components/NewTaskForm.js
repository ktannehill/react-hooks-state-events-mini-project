import {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData({...formData, [key]: value})
  }

  const displayCategories = categories.filter(category => category !== "All")
    .map(category => <option key={category} value={category}>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(formData, e)}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
