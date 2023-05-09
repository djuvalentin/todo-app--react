import React from "react";
import BootstrapIcon from "../../icons/BootstrapIcon";
import "./TaskButton.css";

const TaskButton = (props) => {
  const className = `btn btn-outline-secondary task-btn-${props.buttonType}`;

  return (
    <button className={className}>
      <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
    </button>
  );
};

export default TaskButton;
