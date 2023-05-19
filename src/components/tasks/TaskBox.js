import React from 'react';
import TodoTasks from './TodoTasks';
import NewTask from './NewTask';
import TaskBoxHeading from './TaskBoxHeading';
import EmptyBoxMessage from '../EmptyBoxMessage';
import './TaskBox.css';

const TaskBox = props => {
  if (!props.listTasks) return;
  const boxEmpty = props.listTasks.length === 0;

  return (
    <div className="task-box col-6 px-0 pb-3 m-4 bg-light text-success">
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
