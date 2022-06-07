import React from "react";
import Task from './Task';

function TaskList({ tasks, keyGen }) {

  const tasksList = tasks.map((task) => {
    return (
        <Task taskText = {task.text} taskCategory={task.category} key={keyGen()} />
      )
      })
  
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
