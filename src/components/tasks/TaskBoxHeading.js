import React from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapIcon from '../BootsrapIcon';
import styles from './TaskBoxHeading.module.css';

const TaskBoxHeading = props => {
  const deleteListHandler = () => {
    props.onPromptDelete('list', props.activeList);
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

  return (
    <div className={headingCombinedClasses}>
      <h2 className=" m-3">{props.activeList}</h2>
      <Button onClick={deleteListHandler} className={deleteBtnCombinedClasses}>
        <BootstrapIcon bootstrapIconName="bi-trash fs-2" />
      </Button>
    </div>
  );
};

export default TaskBoxHeading;
