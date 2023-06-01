import React from 'react';
import TaskTitle from './TaskTitle';
import TaskButtons from './task-buttons/TaskButtons';

const Task = props => {
  const listItemCombinedClasses = ['list-group-item', 'container'].join(' ');

  return (
    <li className={listItemCombinedClasses}>
      <div className="row">
        <TaskTitle title={props.title} done={props.done} />
        <TaskButtons
          onDeleteTask={props.onDeleteTask}
          onToggleCrossOff={props.onToggleCrossOff}
          taskDone={props.done}
          taskID={props.id}
          taskTitle={props.title}
        />
      </div>
    </li>
  );
};

export default Task;
