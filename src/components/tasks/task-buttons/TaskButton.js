import React from "react";
import BootstrapIcon from "../../icons/BootstrapIcon";
import "./TaskButton.css";

const TaskButton = (props) => {
  const className = `btn btn-outline-secondary task-btn-${props.buttonType}`;

  const manageTask = function () {
    const [action, taskID] = [...this];

    (action === "check" || action === "uncheck") &&
      props.onToggleCrossOff(taskID);
  };

  return (
    <button
      onClick={manageTask.bind([props.buttonType, props.taskID])}
      className={className}
    >
      <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
    </button>
  );
};

export default TaskButton;
