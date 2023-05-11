import React from "react";
import TaskButton from "./TaskButton";
import "./TaskButtons.css";

const TaskButtons = (props) => {
  return (
    <div
      className="col-4 btn-group task-btns"
      role="group"
      aria-label="Manage task"
    >
      <TaskButton
        onToggleCrossOff={props.onToggleCrossOff}
        taskID={props.taskID}
        buttonType={props.taskDone ? "uncheck" : "check"}
        bootstrapIconName={
          "bi-" + (props.taskDone ? "arrow-counterclockwise" : "check-lg")
        }
      />

      <TaskButton
        taskID={props.taskID}
        buttonType="delete"
        bootstrapIconName="bi-dash-circle"
      />
    </div>
  );
};

export default TaskButtons;
