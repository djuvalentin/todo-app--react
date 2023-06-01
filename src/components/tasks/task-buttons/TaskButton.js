import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './TaskButton.module.css';

const TaskButton = props => {
  let buttonType;
  let bootstrapIcon;

  if (props.deleteButton) {
    buttonType = 'delete';
    bootstrapIcon = 'bi bi-dash-circle';
  } else if (props.taskDone) {
    buttonType = 'uncheck';
    bootstrapIcon = 'bi bi-arrow-counterclockwise';
  } else {
    buttonType = 'check';
    bootstrapIcon = 'bi bi-check-lg';
  }

  const btnCombinedClasses = [
    'fs-5',
    'p-0',
    'task-btn',
    styles[buttonType],
  ].join(' ');

  return (
    <Button
      onClick={props.onManageTask}
      variant="outline-secondary"
      className={btnCombinedClasses}
    >
      <i className={bootstrapIcon}></i>
    </Button>
  );
};

export default TaskButton;
