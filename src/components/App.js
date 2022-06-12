import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log(CATEGORIES);


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [newItemText, setNewItemText] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("All");
  const [filterState, setFilterState] = useState("All");

  function submitHandler() {
    const newTaskList = [
      ...TASKS,
      { text: newItemText, category: newItemCategory },
    ];
    setTasks(newTaskList);
  }

  function filterTasks() {
    if (filterState==="All") {
      return tasks;
    } else {
      return tasks.filter(task => task.category===filterState)
    }
  }

  const filteredTasks = filterTasks();

  console.log(filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedFilter={filterState}
        clickHandler={(e) => {
          const buttons = Array.from(e.target.parentElement.children);
          buttons.forEach((btn) => btn.classList.remove("selected"));
          e.target.classList.add("selected");
          setFilterState(e.target.id);
        }}
      />
      <NewTaskForm
        categories={CATEGORIES}
        newItemText={newItemText}
        newItemCategory={newItemCategory}
        onTextChange={setNewItemText}
        onCategoryChange={setNewItemCategory}
        onSubmit={submitHandler}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
