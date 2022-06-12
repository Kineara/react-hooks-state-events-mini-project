import React from "react";

function NewTaskForm({categories, newItemText, newItemCategory, onTextChange, onCategoryChange, onSubmit}) {
  const categoryOptions = categories.map(category => {
    return (
      <option id={category} value={category}>{category}</option>
    )
  })
  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => onTextChange(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=> onCategoryChange(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
