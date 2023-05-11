import React from "react";
import TodoTasks from "./TodoTasks";
import NewTask from "./NewTask";

const TasksList = (props) => {
  return (
    <div className="col-6 px-0 pb-3 m-4 bg-light text-success">
      <h2 className="text-center mb-4">Tasks</h2>
      <TodoTasks
        onToggleCrossOff={props.onToggleCrossOff}
        tasks={props.listTasks}
      />
      <NewTask inputType="task" />
    </div>
  );
};

export default TasksList;
