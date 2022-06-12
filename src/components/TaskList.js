import React from "react";
import {v4 as uuidv4} from "uuid";
import Task from "./Task";

function TaskList({ tasks, deleteHandler }) {

  const tasksList = tasks.map((task) => {
    return (
      <Task
        taskObj = {task}
        key={uuidv4()}
        deleteHandler={deleteHandler}
      />
    );
  });

  return <div className="tasks">{tasksList}</div>;
}

export default TaskList;
