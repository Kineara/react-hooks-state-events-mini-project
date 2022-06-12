import React from "react";
import Task from './Task';

function TaskList({ tasks }) {

  const tasksList = tasks.map((task) => {
    return (
        <Task taskText = {task.text} taskCategory={task.category} id={task.id} />
      )
      })
  
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
