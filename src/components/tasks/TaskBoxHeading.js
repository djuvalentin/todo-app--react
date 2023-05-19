import React from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapIcon from '../BootsrapIcon';
import './TaskBoxHeading.css';

const TaskBoxHeading = props => {
  const deleteListHandler = () => {
    props.onPromptDelete('list', props.activeList);
  };

  return (
    <div className="d-flex  align-items-center justify-content-center position-relative">
      <h2 className=" m-3">{props.activeList}</h2>
      <Button
        onClick={deleteListHandler}
        className="btn-delete-list position-absolute py-0 px-2 end-0 me-5"
        variant="outline-danger"
      >
        <BootstrapIcon bootstrapIconName="bi-trash fs-2" />
      </Button>
    </div>
  );
};

export default TaskBoxHeading;
