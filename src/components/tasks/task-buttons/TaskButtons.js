import React from "react";
import TaskButton from "./TaskButton";
import "./TaskButtons.css";

const TaskButtons = () => {
  return (
    <div
      className="col-4 btn-group task-btns"
      role="group"
      aria-label="Manage task"
    >
      <TaskButton buttonType="check" bootstrapIconName="bi-check-lg" />
      <TaskButton
        buttonType="uncheck"
        bootstrapIconName="bi-arrow-counterclockwise"
      />
      <TaskButton buttonType="delete" bootstrapIconName="bi-dash-circle" />
    </div>
  );
};

export default TaskButtons;
