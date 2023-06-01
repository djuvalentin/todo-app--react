import React from 'react';
import Card from '../UI/Card';
import TodoTasks from './TodoTasks';
import NewTask from './NewTask';
import TaskBoxHeading from './TaskBoxHeading';
import EmptyBoxMessage from '../UI/EmptyBoxMessage';

const TaskBox = props => {
  if (!props.listTasks) return;
  const boxEmpty = props.listTasks.length === 0;

  return (
    <Card variant="task">
      <TaskBoxHeading
        onDeleteList={props.onDeleteList}
        activeList={props.activeList}
      />
      <EmptyBoxMessage message="No tasks yet..." fontSize="1" show={boxEmpty} />
      <TodoTasks
        onDeleteTask={props.onDeleteTask}
        onToggleCrossOff={props.onToggleCrossOff}
        tasks={props.listTasks}
      />
      <NewTask onAddNewTask={props.onAddNewTask} />
    </Card>
  );
};

export default TaskBox;
