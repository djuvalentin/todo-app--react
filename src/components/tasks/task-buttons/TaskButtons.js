import React from 'react';
import TaskButton from './TaskButton';
import styles from './TaskButtons.module.css';

const TaskButtons = props => {
  const buttonsCombinedClasses = [
    'col-4',
    'btn-group',
    styles['min-width-100px'],
  ].join(' ');

  return (
    <div
      className={buttonsCombinedClasses}
      role="group"
      aria-label="Manage task"
    >
      <TaskButton
        onManage={props.onToggleCrossOff}
        taskID={props.taskID}
        taskTitle={props.taskTitle}
        buttonType={props.taskDone ? 'uncheck' : 'check'}
        bootstrapIconName={
          'bi-' + (props.taskDone ? 'arrow-counterclockwise' : 'check-lg')
        }
      />

      <TaskButton
        onManage={props.onPromptDelete}
        taskID={props.taskID}
        taskTitle={props.taskTitle}
        buttonType="delete"
        bootstrapIconName="bi-dash-circle"
      />
    </div>
  );
};

export default TaskButtons;
