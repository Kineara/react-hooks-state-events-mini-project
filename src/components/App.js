import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log(TASKS);

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [newItemText, setNewItemText] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("All");
  let uniqueKey = 0;

  function keyGen(){
    return uniqueKey++
  }

  function submitHandler(e) {
    e.preventDefault();
    setTasks(() => [
      ...tasks,
      { text: newItemText, category: newItemCategory },
    ]);
  }

  function removeTask(e) {

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm
        categories={CATEGORIES}
        newItemText={newItemText}
        newItemCategory={newItemCategory}
        onTextChange={setNewItemText}
        onCategoryChange={setNewItemCategory}
        onTaskFormSubmit={submitHandler}
      />
      <TaskList tasks={tasks} keyGen={keyGen} />
    </div>
  );
}

export default App;
