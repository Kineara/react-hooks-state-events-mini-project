import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log( CATEGORIES );

function App() {
  const {tasks, setTasks} = useState({TASKS})
  const {newItemText, setNewItemText} = useState("")
  const {newItemCategory, setNewItemCategory} = useState("All")

  function submitHandler() {
    const newTaskList = [...TASKS, {text: newItemText, category: newItemCategory}]
    setTasks(newTaskList) 
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} newItemText={newItemText} newItemCategory={newItemCategory} onTextChange={setNewItemText} onCategoryChange={setNewItemCategory} onSubmit={submitHandler}
        />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
