import React from "react";
import Task from "./Task";

const TodoTasks = (props) => {
  return (
    <ul className="list-group fs-4 mb-4">
      {props.tasks.map((task, i) => (
        <Task
          onToggleCrossOff={props.onToggleCrossOff}
          key={i}
          title={task.title}
          done={task.done}
          id={task.id}
        />
      ))}
    </ul>
  );
};

export default TodoTasks;
