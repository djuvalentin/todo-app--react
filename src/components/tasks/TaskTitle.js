import React from "react";

const TaskTitle = (props) => {
  return (
    <span
      className={
        "col-8" + (props.done ? " text-decoration-line-through text-muted" : "")
      }
    >
      {props.title}
    </span>
  );
};

export default TaskTitle;
