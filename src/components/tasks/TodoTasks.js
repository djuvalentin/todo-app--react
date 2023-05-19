import React from 'react';
import Task from './Task';

const TodoTasks = props => {
  if (props.tasks)
    return (
      <ul className="list-group fs-4 mb-4">
        {props.tasks.map((task, i) => (
          <Task
            onPromptDelete={props.onPromptDelete}
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
