import React from "react";
import TaskTitle from "./TaskTitle";
import TaskButtons from "./task-buttons/TaskButtons";

const Task = (props) => {
  return (
    <li className="list-group-item container task">
      <div className="row">
        <TaskTitle title={props.title} done={props.done} />
        <TaskButtons
          onToggleCrossOff={props.onToggleCrossOff}
          taskDone={props.done}
          taskID={props.id}
        />
      </div>
    </li>
  );
};

export default Task;
