import React from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapIcon from '../../BootsrapIcon';
import './TaskButton.css';

const TaskButton = props => {
  const manageTaskHandler = () => {
    if (props.buttonType === 'delete') props.onManage('task', props.taskID);
    else props.onManage(props.taskID);
  };
  return (
    <Button
      variant="outline-secondary"
      className={'fs-5 p-0 task-btn-' + props.buttonType}
      onClick={manageTaskHandler}
    >
      <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
    </Button>
  );
};

export default TaskButton;
