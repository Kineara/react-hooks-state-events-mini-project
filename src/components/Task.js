import React from "react";

function Task({taskObj, deleteHandler }) {

  return (
    <div className="task">
      <div className="label">{taskObj.category}</div>
      <div className="text">{taskObj.text}</div>
      <button className="delete" onClick={() => deleteHandler(taskObj)}>X</button>
    </div>
  );
}

export default Task;

