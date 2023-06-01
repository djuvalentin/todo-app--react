import React from 'react';
import Task from './Task';

const TodoTasks = props => {
  const unorderedListCombinedClasses = ['list-group', 'fs-4', 'mb-4'].join(' ');

  if (props.tasks)
    return (
      <ul className={unorderedListCombinedClasses}>
        {props.tasks.map((task, i) => (
          <Task
            onDeleteTask={props.onDeleteTask}
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
