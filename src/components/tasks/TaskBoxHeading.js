import React, { useState } from 'react';
import styles from './TaskBoxHeading.module.css';
import Button from 'react-bootstrap/Button';
import ModalDelete from '../UI/ModalDelete';

const TaskBoxHeading = props => {
  const [deleteListPrompt, setDeleteListPrompt] = useState(null);

  const showModalHandler = () => {
    setDeleteListPrompt({
      title: `Remove list`,
      message: `Are you sure you want to delete '${props.activeList}' list?`,
    });
  };

  const closeModalHandler = () => {
    setDeleteListPrompt(null);
  };

  const deleteListHandler = () => {
    props.onDeleteList(props.activeList);
    setDeleteListPrompt(null);
  };

  const headingCombinedClasses = [
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'position-relative',
  ].join(' ');

  const deleteBtnCombinedClasses = [
    'position-absolute',
    'end-0',
    'me-5',
    'py-0 px-2',
    'border-0',
    'bg-transparent',
    styles['custom-hover-color'],
  ].join(' ');

  const deleteIconCombinedClasses = ['bi', 'bi-trash', 'fs-2'].join(' ');

  return (
    <div className={headingCombinedClasses}>
      <h2 className="m-3">{props.activeList}</h2>
      <Button onClick={showModalHandler} className={deleteBtnCombinedClasses}>
        <i className={deleteIconCombinedClasses} />
      </Button>
      <ModalDelete
        onClose={closeModalHandler}
        onDelete={deleteListHandler}
        show={deleteListPrompt}
        title={deleteListPrompt && deleteListPrompt.title}
        message={deleteListPrompt && deleteListPrompt.message}
      />
    </div>
  );
};

export default TaskBoxHeading;
