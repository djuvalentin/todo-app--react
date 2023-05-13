import React from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapIcon from './ButtonIcon';
import './TaskButton.css';

const TaskButton = props => {
  // const manageTask = function () {
  //   const [action, taskID] = [...this];

  //   // Check / Uncheck Task
  //   (action === 'check' || action === 'uncheck') &&
  //     props.onToggleCrossOff(taskID);

  //   // Show Delete Modal
  // };
  // return (
  //   <button
  //     onClick={manageTask.bind([props.buttonType, props.taskID])}
  //     className={className}
  //   >
  //     <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
  //   </button>
  // );

  const manageItemHandler = () => {
    if (props.buttonType === 'delete') props.onManage('task', props.taskID);
    else props.onManage(props.taskID);
  };
  return (
    <Button
      variant="outline-secondary"
      className={'task-btn-' + props.buttonType}
      onClick={manageItemHandler}
    >
      <BootstrapIcon bootstrapIconName={props.bootstrapIconName} />
    </Button>
  );
};

export default TaskButton;
