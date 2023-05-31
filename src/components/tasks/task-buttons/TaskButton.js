import React from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapIcon from '../../BootsrapIcon';
import styles from './TaskButton.module.css';

const TaskButton = props => {
  const btnCombinedClasses = [
    'fs-5',
    'p-0',
    'task-btn',
    styles[`task-btn-${props.buttonType}`],
  ];

  const manageTaskHandler = () => {
    if (props.buttonType === 'delete') props.onManage('task', props.taskID);
    else props.onManage(props.taskID);
  };

  return (
    <Button
      variant="outline-secondary"
      className={btnCombinedClasses}
      onClick={manageTaskHandler}
    >
      <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
    </Button>
  );
};

export default TaskButton;
