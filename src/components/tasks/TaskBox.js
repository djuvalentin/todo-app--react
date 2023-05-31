import React from 'react';
import TodoTasks from './TodoTasks';
import NewTask from './NewTask';
import TaskBoxHeading from './TaskBoxHeading';
import EmptyBoxMessage from '../EmptyBoxMessage';
import styles from '../UI/Box.module.css';

const TaskBox = props => {
  if (!props.listTasks) return;
  const boxEmpty = props.listTasks.length === 0;

  const boxCombinedClasses = [
    'col-md-7',
    'px-0',
    'pb-3',
    'my-4',
    'mx-auto',
    'bg-light',
    'text-success',
    styles['custom-h-fit-content'],
  ].join(' ');

  return (
    <div className={boxCombinedClasses}>
      <TaskBoxHeading
        onPromptDelete={props.onPromptDelete}
        activeList={props.activeList}
      />
      <EmptyBoxMessage container="tasks" show={boxEmpty} />
      <TodoTasks
        onPromptDelete={props.onPromptDelete}
        onToggleCrossOff={props.onToggleCrossOff}
        tasks={props.listTasks}
      />
      <NewTask onAddNewTask={props.onAddNewTask} />
    </div>
  );
};

export default TaskBox;
