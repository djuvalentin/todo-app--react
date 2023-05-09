import React from "react";
import TaskTitle from "./TaskTitle";
import TaskButtons from "./task-buttons/TaskButtons";

const Task = () => {
  return (
    <li className="list-group-item container task">
      <div className="row">
        <TaskTitle />
        <TaskButtons />
      </div>
    </li>
  );
};

export default Task;
